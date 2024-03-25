import { Test, TestingModule } from '@nestjs/testing';
import { FansService } from './fans.service';
import { SwapiService } from './swapi.service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { SwapiEndpointsEnum } from './interfaces/SwapiEndpointsEnum';
import {
  specieMockData,
  planetMockData,
  favoriteFilmMockData,
  favoriteCharacterMockData,
  planetMockDataTranslated,
  favoriteFilmMockDataTranslated,
  specieMockDataTranslated,
  favoriteCharacterMockDataTranslated
} from './mocks/BasicDataMocks'
describe('SwapiService', () => {
  let swapiService: SwapiService;
  const mock = new MockAdapter(axios);
  const url = 'https://swapi.py4e.com/api'
  
  jest.mock('axios');
  beforeEach(async () => {
    
    mock.onGet(new RegExp(`${url}/${SwapiEndpointsEnum.Films}/1/`)).reply(200, favoriteFilmMockData);
    mock.onGet(new RegExp(`${url}/${SwapiEndpointsEnum.Species}/*`)).reply(200, specieMockData);
    mock.onGet(new RegExp(`${url}/${SwapiEndpointsEnum.Planets}/1/`)).reply(200, planetMockData);
    mock.onGet(new RegExp(`${url}/${SwapiEndpointsEnum.People}/*`)).reply(200, favoriteCharacterMockData);
    
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        SwapiService
      ],
    }).compile();

    swapiService = app.get<SwapiService>(SwapiService);
  });

  describe('getPlanet', () => {
    it('should return translate data planet data', async () => {
      const result = await swapiService.getPlanet(1);
      
      expect(result).toEqual(planetMockDataTranslated);
    });
    it('should return null on invalid id', async () => {
      const result = await swapiService.getPlanet(0);
      mock.onGet(new RegExp(`${url}/${SwapiEndpointsEnum.Planets}/0/`)).reply(404);
     
      expect(result).toBeNull;
    });
  });

  describe('getFavoriteFilm', () => {
    it('should return translated FIlm data', async () => {
      const result = await swapiService.getFavoriteFilm(1);
      
      expect(result).toEqual(favoriteFilmMockDataTranslated);
    });
    it('should return null on invalid id', async () => {
      const result = await swapiService.getFavoriteFilm(0);
      mock.onGet(new RegExp(`${url}/${SwapiEndpointsEnum.Films}/0/`)).reply(404);
     
      expect(result).toBeNull;
    });
  });

  describe('getSpecie', () => {
    it('should return translated Specie data', async () => {
      const result = await swapiService.getSpecie(1);
      
      expect(result).toEqual(specieMockDataTranslated);
    });
    it('should return null on invalid id', async () => {
      const result = await swapiService.getSpecie(0);
      mock.onGet(new RegExp(`${url}/${SwapiEndpointsEnum.Species}/0/`)).reply(404);
     
      expect(result).toBeNull;
    });
  });

  describe('getFavoriteCharacter', () => {
    it('should return translated Character data', async () => {
      const result = await swapiService.getFavoriteCharacter(1);
      
      expect(result).toEqual(favoriteCharacterMockDataTranslated);
    });
    it('should return null on invalid id', async () => {
      const result = await swapiService.getFavoriteCharacter(0);
      mock.onGet(new RegExp(`${url}/${SwapiEndpointsEnum.People}/0/`)).reply(404);
     
      expect(result).toBeNull;
    });
  });
});
