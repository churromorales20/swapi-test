import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Callback, Context, Handler } from 'aws-lambda';
import { FansModule } from './fans.module';
import { FansService } from './fans.service';
import { validate } from 'class-validator';
import { FanDto } from './fan.dto';

export const getFans: Handler = async (
  event: any,
  _context: Context,
  _callback: Callback,
) => {
  const appContext = await NestFactory.createApplicationContext(FansModule);
  const fansService = appContext.get(FansService);

  try {
    const res = await fansService.getFans();
    return {
      statusCode: HttpStatus.OK,
      body: JSON.stringify(res),
      
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: JSON.stringify(error.response ?? error.message),
    };
  }
};

export const saveFan: Handler = async (
  _event: any,
  _context: Context,
  _callback: Callback,
) => {
  const appContext = await NestFactory.createApplicationContext(FansModule);
  const fansService = appContext.get(FansService);

  try {
    const fanData: FanDto = JSON.parse(_event.body);
    const errorsDto = await validate(fanData);
    let errors = [];
    
    if (errorsDto.length > 0) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        body: JSON.stringify({ message: 'Invalid fan data', errors: errorsDto }),
      };
    } 
    
    const swapiValidation = await fansService.validateSwapiData(fanData);

    if (!swapiValidation.is_valid) {
      errors = swapiValidation.errors;
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        body: JSON.stringify({ message: 'Invalid fan data', errors: swapiValidation.errors }),
      };
    }

    const res = await fansService.saveFan(swapiValidation.fan);
    return {
      statusCode: HttpStatus.OK,
      body: JSON.stringify(res),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: JSON.stringify(error.response ?? error.message),
    };
  }
};