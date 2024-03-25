import { Test, TestingModule } from '@nestjs/testing';
import { FansService } from './fans.service';
import { SwapiService } from './swapi.service';
import { SwapiEndpointsEnum } from './interfaces/SwapiEndpointsEnum';
import { 
  specieMockData,
  planetMockData,
  favoriteFilmMockData,
  favoriteCharacterMockData,
  newFanMockData,
  fanDTOMockData,
  fanMockData,
 } from './mocks/BasicDataMocks'
describe('FansService', () => {
  let fansService: FansService;
  let swapiServiceMock;
  let dynamoDBMock;


  beforeEach(async () => {
    swapiServiceMock = {
      getItem: jest.fn(),
      checkItemExistence: jest.fn(),
      getPlanet: jest.fn().mockResolvedValue(planetMockData),
      getSpecie: jest.fn().mockResolvedValue(specieMockData),
      getFavoriteFilm: jest.fn().mockResolvedValue(favoriteFilmMockData),
      getFavoriteCharacter: jest.fn().mockResolvedValue(favoriteCharacterMockData),
    };

    dynamoDBMock = {
      scan: jest.fn(),
      promise: jest.fn(),
      put: jest.fn(),
    };

    const app: TestingModule = await Test.createTestingModule({
      providers: [
        FansService,
        { provide: SwapiService, useValue: swapiServiceMock },
        //{ provide: DynamoDB.DocumentClient, useValue: dynamoDBMock },
      ],
    }).compile();

    fansService = app.get<FansService>(FansService);
    fansService.db = dynamoDBMock
  });

  describe('getFans', () => {
    it('should return fans with related data', async () => {
      const mockDBResult = {
        Items: [
          fanMockData,
        ],
      };

      swapiServiceMock.getItem.mockImplementation(async (endpoint: SwapiEndpointsEnum, id: number) => {
        switch (endpoint) {
          case SwapiEndpointsEnum.Films:
            return favoriteFilmMockData
            break;
          case SwapiEndpointsEnum.Species:
            return specieMockData; 
            break;
          case SwapiEndpointsEnum.Planets:
            return planetMockData;
            break;
          case SwapiEndpointsEnum.People:
            return favoriteCharacterMockData
            break;
        }
      })  

      dynamoDBMock.scan.mockReturnValue({ promise: jest.fn().mockResolvedValue(mockDBResult) });

      const result = await fansService.getFans();
      
      expect(result).toEqual([fanMockData]);
    });
  });

  describe('saveFan', () => {
    it('should return fan information after being saved', async () => {
      dynamoDBMock.put.mockReturnValue({ promise: jest.fn() });
      const result = await fansService.saveFan(newFanMockData);
      
      expect(result).toEqual(newFanMockData);
    });
  });

  describe('validateSwapiData', () => {
    it('Must mark as valid the SWAPI information', async () => {

      const result = await fansService.validateSwapiData(fanDTOMockData);
      
      expect(result.errors).toHaveLength(0);
      expect(result.is_valid).toBeTruthy();
      expect(result.fan).toEqual(fanMockData);
    });

    it('Must mark as invalid Planet information', async () => {
      swapiServiceMock.getPlanet.mockResolvedValue(null);

      const result = await fansService.validateSwapiData(fanDTOMockData);
      
      expect(result.errors).toHaveLength(1);
      expect(result.is_valid).toBeFalsy();
      expect(result.errors).toContain('Home planet ID does not exist.');
    });
    
    it('Must mark as invalid Specie information', async () => {
      swapiServiceMock.getSpecie.mockResolvedValue(null);

      const result = await fansService.validateSwapiData(fanDTOMockData);
      
      expect(result.errors).toHaveLength(1);
      expect(result.is_valid).toBeFalsy();
      expect(result.errors).toContain('Species ID does not exist.');
    });

    it('Must mark as invalid Favorite Character information', async () => {
      swapiServiceMock.getFavoriteCharacter.mockResolvedValue(null);

      const result = await fansService.validateSwapiData(fanDTOMockData);
      
      expect(result.errors).toHaveLength(1);
      expect(result.is_valid).toBeFalsy();
      expect(result.errors).toContain('Favorite character ID does not exist.');
    });

    it('Must mark as invalid Favorite Film information', async () => {
      swapiServiceMock.getFavoriteFilm.mockResolvedValue(null);

      const result = await fansService.validateSwapiData(fanDTOMockData);
      
      expect(result.errors).toHaveLength(1);
      expect(result.is_valid).toBeFalsy(); 
      expect(result.errors).toContain('Favorite film ID does not exist.');
    });

    it('Must mark as invalid ALL information', async () => {
      swapiServiceMock.getPlanet.mockResolvedValue(null);
      swapiServiceMock.getSpecie.mockResolvedValue(null);
      swapiServiceMock.getFavoriteFilm.mockResolvedValue(null);
      swapiServiceMock.getFavoriteCharacter.mockResolvedValue(null);

      const result = await fansService.validateSwapiData(fanDTOMockData);

      expect(result.is_valid).toBeFalsy();
      expect(result.errors).toHaveLength(4);
    });
  });
});
