import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v1 } from 'uuid';
import { DynamoDB } from 'aws-sdk';
import { FanDto } from './fan.dto';
import { SwapiService } from './swapi.service';
import { IFanSwapiValidationResult } from './interfaces/IFanSwapiValidationResult';
import { IFan } from './interfaces/IFan';

@Injectable()
export class FansService {

  public db: DynamoDB.DocumentClient;

  constructor(private swapiService: SwapiService) { 
    this.db = new DynamoDB.DocumentClient()
  }

  
  async getFans(): Promise<IFan[]> {
    const params = {
      TableName: process.env.FANS_DYNAMODB_TABLE,
    };

    try {
      const out = this.db.scan(params);
      const result = await out.promise();
      return result.Items as IFan[];
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async validateSwapiData(fanData: FanDto): Promise<IFanSwapiValidationResult> {
    const result: IFanSwapiValidationResult = {
      is_valid: true,
      errors: [],
      fan: {
        first_name: fanData.first_name,
        last_name: fanData.last_name,
        nickname: fanData.nickname,
        country: fanData.country,
        species: null,
        home_planet: null,
        favorite_character: null,
        favorite_film: null,
      }
    };
    result.fan.favorite_film = await this.swapiService.getFavoriteFilm(fanData.favorite_film_id);
    if (result.fan.favorite_film === null) {
      result.is_valid = false;
      result.errors.push('Favorite film ID does not exist.');
    }

    result.fan.species = await this.swapiService.getSpecie(fanData.species_id);
    if (result.fan.species === null) {
      result.is_valid = false;
      result.errors.push('Species ID does not exist.');
    }
    
    result.fan.home_planet = await this.swapiService.getPlanet(fanData.home_planet_id);
    if (result.fan.home_planet === null) {
      result.is_valid = false;
      result.errors.push('Home planet ID does not exist.');
    }
    
    result.fan.favorite_character = await this.swapiService.getFavoriteCharacter(fanData.favorite_character_id);
    if (result.fan.favorite_character === null) {
      result.is_valid = false;
      result.errors.push('Favorite character ID does not exist.');
    }

    return result;
  }

  async saveFan(fanData: IFan) {
    const { 
      first_name,
      last_name,
      nickname,
      country,
      species,
      home_planet,
      favorite_character,
      favorite_film
    } = fanData;

    
    const createdOn = new Date().getTime();

    const data = {
      TableName: process.env.FANS_DYNAMODB_TABLE,
      Item: {
        id: v1(),
        first_name,
        last_name,
        nickname,
        country,
        species,
        home_planet,
        favorite_character,
        favorite_film,
        createdOn
      },
    };

    try {
      await this.db.put(data).promise();
      return fanData;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
