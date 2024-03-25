export const specieMockData = {
  average_height: '150',
  average_lifespan: '80',
  classification: 'Reptil',
  created: '2022-03-25T10:00:00Z',
  designation: 'Sentient',
  edited: '2022-03-26T12:00:00Z',
  eye_colors: 'Yellow',
  hair_colors: 'None',
  homeworld: 'Tatooine',
  language: 'Huttese',
  name: 'Hutt',
  people: ['1', '2', '3'],
  films: ['4', '5', '6'],
  skin_colors: 'Green, Brown',
};

export const specieMockDataTranslated = {
  altura_promedio: '150',
  esperanza_vida_promedio: '80',
  clasificacion: 'Reptil',
  creado: '2022-03-25T10:00:00Z',
  designacion: 'Sentient',
  editado: '2022-03-26T12:00:00Z',
  colores_ojos: 'Yellow',
  colores_cabello: 'None',
  planeta_origen: 'Tatooine',
  idioma: 'Huttese',
  nombre: 'Hutt',
  personas: ['1', '2', '3'],
  peliculas: ['4', '5', '6'],
  colores_piel: 'Green, Brown',
};

export const planetMockData = {
  climate: 'Temperate',
  created: '2022-03-25T10:00:00Z',
  diameter: '12500',
  edited: '2022-03-26T12:00:00Z',
  films: ['4', '5', '6'],
  gravity: '1 standard',
  name: 'Tatooine',
  orbital_period: '304',
  population: '200000',
  residents: ['1', '2', '3'],
  rotation_period: '23',
  surface_water: '1',
  terrain: 'Desert',
};

export const planetMockDataTranslated = {
  clima: 'Temperate',
  creado: '2022-03-25T10:00:00Z',
  diametro: '12500',
  editado: '2022-03-26T12:00:00Z',
  peliculas: ['4', '5', '6'],
  gravedad: '1 standard',
  nombre: 'Tatooine',
  periodo_orbital: '304',
  poblacion: '200000',
  residentes: ['1', '2', '3'],
  periodo_rotacion: '23',
  agua_superficie: '1',
  terreno: 'Desert',
};

export const favoriteFilmMockData = {
  characters: ['1', '2', '3'],
  created: '2022-03-25T10:00:00Z',
  director: 'George Lucas',
  edited: '2022-03-26T12:00:00Z',
  episode_id: '4',
  opening_crawl: 'A long time ago in a galaxy far, far away...',
  planets: ['Tatooine', 'Alderaan', 'Coruscant'],
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1977-05-25',
  species: ['Human', 'Wookiee', 'Rodian'],
  starships: ['X-wing', 'Y-wing', 'Millennium Falcon'],
  title: 'Star Wars: Episode IV - A New Hope',
  url: 'https://swapi.py4e.com/api/films/1/',
  vehicles: ['Sand Crawler', 'TIE fighter', 'Imperial Speeder Bike'],
};

export const favoriteFilmMockDataTranslated = {
  personajes: ['1', '2', '3'],
  creado: '2022-03-25T10:00:00Z',
  director: 'George Lucas',
  editado: '2022-03-26T12:00:00Z',
  episodio_id: '4',
  introduccion: 'A long time ago in a galaxy far, far away...',
  planetas: ['Tatooine', 'Alderaan', 'Coruscant'],
  productor: 'Gary Kurtz, Rick McCallum',
  fecha_estreno: '1977-05-25',
  especies: ['Human', 'Wookiee', 'Rodian'],
  naves_estelares: ['X-wing', 'Y-wing', 'Millennium Falcon'],
  titulo: 'Star Wars: Episode IV - A New Hope',
  url: 'https://swapi.py4e.com/api/films/1/',
  vehiculos: ['Sand Crawler', 'TIE fighter', 'Imperial Speeder Bike'],
};

export const favoriteCharacterMockData = {
  birth_year: '19 BBY',
  eye_color: 'Blue',
  films: ['1', '2', '3'],
  gender: 'Male',
  hair_color: 'Blond',
  height: '172',
  homeworld: 'Tatooine',
  mass: '77',
  name: 'Luke Skywalker',
  skin_color: 'Fair',
};

export const favoriteCharacterMockDataTranslated = {
  ano_nacimiento: '19 BBY',
  color_ojo: 'Blue',
  peliculas: ['1', '2', '3'],
  genero: 'Male',
  color_cabello: 'Blond',
  altura: '172',
  planeta_origen: 'Tatooine',
  peso: '77',
  nombre: 'Luke Skywalker',
  color_piel: 'Fair',
};

export const newFanMockData = {
  first_name: 'John',
  last_name: 'Doe',
  nickname: 'JD',
  country: 'US',
  species: null,
  home_planet: null,
  favorite_character: null,
  favorite_film: null,
}

export const fanDTOMockData = {
  first_name: 'John',
  last_name: 'Doe',
  nickname: 'JD',
  country: 'US',
  species_id: 1,
  home_planet_id: 1,
  favorite_character_id: 1,
  favorite_film_id: 1,
}

export const fanMockData = {
  first_name: 'John',
  last_name: 'Doe',
  nickname: 'JD',
  country: 'US',
  species: specieMockData,
  home_planet: planetMockData,
  favorite_character: favoriteCharacterMockData,
  favorite_film: favoriteFilmMockData,
}