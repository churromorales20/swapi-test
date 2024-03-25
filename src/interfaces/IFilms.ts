export interface IFilmRaw {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export interface IFilm {
  personajes: string[];
  creado: string;
  director: string;
  editado: string;
  episodio_id: number;
  introduccion: string;
  planetas: string[];
  productor: string;
  fecha_estreno: string;
  especies: string[];
  naves_estelares: string[];
  titulo: string;
  url: string;
  vehiculos: string[];
}