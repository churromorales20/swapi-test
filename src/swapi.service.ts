import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ICharacter, ICharacterRaw } from './interfaces/ICharacter';
import { IFilm, IFilmRaw } from './interfaces/IFilms';
import { ISpecies, ISpeciesRaw } from './interfaces/ISpecies';
import { IPlanet, IPlanetRaw } from './interfaces/IPlanet';
import { SwapiEndpointsEnum } from './interfaces/SwapiEndpointsEnum';

@Injectable()
export class SwapiService {
  private swapiBaseUrl = 'https://swapi.py4e.com/api';


  async getPlanet(planetId: number): Promise<IPlanet | null> {
    const rawPlanet = await this.getItem<IPlanetRaw>(SwapiEndpointsEnum.Planets, planetId);
    
    return rawPlanet ? {
      clima: rawPlanet.climate,
      creado: rawPlanet.created,
      diametro: rawPlanet.diameter,
      editado: rawPlanet.edited,
      peliculas: rawPlanet.films,
      gravedad: rawPlanet.gravity,
      nombre: rawPlanet.name,
      periodo_orbital: rawPlanet.orbital_period,
      poblacion: rawPlanet.population,
      residentes: rawPlanet.residents,
      periodo_rotacion: rawPlanet.rotation_period,
      agua_superficie: rawPlanet.surface_water,
      terreno: rawPlanet.terrain,
    } : null;
  }

  async getSpecie(specieId: number): Promise<ISpecies | null> {
    const rawSpecie = await this.getItem<ISpeciesRaw>(SwapiEndpointsEnum.Species, specieId);

    return rawSpecie ? {
      altura_promedio: rawSpecie.average_height,
      esperanza_vida_promedio: rawSpecie.average_lifespan,
      clasificacion: rawSpecie.classification,
      creado: rawSpecie.created,
      designacion: rawSpecie.designation,
      editado: rawSpecie.edited,
      colores_ojos: rawSpecie.eye_colors,
      colores_cabello: rawSpecie.hair_colors,
      planeta_origen: rawSpecie.homeworld,
      idioma: rawSpecie.language,
      nombre: rawSpecie.name,
      personas: rawSpecie.people,
      peliculas: rawSpecie.films,
      colores_piel: rawSpecie.skin_colors,
    } : null;
  }

  async getFavoriteFilm(favoriteId: number): Promise<IFilm | null> {
    const rawFilm = await this.getItem<IFilmRaw>(SwapiEndpointsEnum.Films, favoriteId);
    return rawFilm ? {
      personajes: rawFilm.characters,
      creado: rawFilm.created,
      director: rawFilm.director,
      editado: rawFilm.edited,
      episodio_id: rawFilm.episode_id,
      introduccion: rawFilm.opening_crawl,
      planetas: rawFilm.planets,
      productor: rawFilm.producer,
      fecha_estreno: rawFilm.release_date,
      especies: rawFilm.species,
      naves_estelares: rawFilm.starships,
      titulo: rawFilm.title,
      url: rawFilm.url,
      vehiculos: rawFilm.vehicles,
    } : null;
  }

  async getFavoriteCharacter(favoriteId: number): Promise<ICharacter | null> {
    const rawCharacter = await this.getItem<ICharacterRaw>(SwapiEndpointsEnum.People, favoriteId);

    return rawCharacter ? {
      ano_nacimiento: rawCharacter.birth_year,
      color_ojo: rawCharacter.eye_color,
      peliculas: rawCharacter.films,
      genero: rawCharacter.gender,
      color_cabello: rawCharacter.hair_color,
      altura: rawCharacter.height,
      planeta_origen: rawCharacter.homeworld,
      peso: rawCharacter.mass,
      nombre: rawCharacter.name,
      color_piel: rawCharacter.skin_color,
    } : null;
  }

  private async getItem<T extends object | null>(endpoint: SwapiEndpointsEnum, id: number): Promise<T | null> {
    try {
      const response = await axios.get(`${this.swapiBaseUrl}/${endpoint}/${id}/`);
      console.log('response', `${this.swapiBaseUrl}/${endpoint}/${id}/`);
      
      if (response.status === 200) {

        return response.data as T;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
}
