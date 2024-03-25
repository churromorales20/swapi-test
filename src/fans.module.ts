import { Module } from '@nestjs/common';
import { FansService } from './fans.service';
import { SwapiService } from './swapi.service';

@Module({
  imports: [],
  providers: [FansService, SwapiService],
})
export class FansModule { }