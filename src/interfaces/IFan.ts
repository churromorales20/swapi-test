import { ICharacter } from "./ICharacter";
import { IFilm } from "./IFilms";
import { IPlanet } from "./IPlanet";
import { ISpecies } from "./ISpecies";

export interface IFan {
  first_name: string;
  last_name: string;
  nickname: string;
  country: string;
  species: ISpecies | null;
  home_planet: IPlanet;
  favorite_character: ICharacter | null;
  favorite_film: IFilm | null;
}