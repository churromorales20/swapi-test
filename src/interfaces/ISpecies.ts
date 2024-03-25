export interface ISpeciesRaw {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
}

export interface ISpecies{
  altura_promedio: string;
  esperanza_vida_promedio: string;
  clasificacion: string;
  creado: string;
  designacion: string;
  editado: string;
  colores_ojos: string;
  colores_cabello: string;
  planeta_origen: string;
  idioma: string;
  nombre: string;
  personas: string[];
  peliculas: string[];
  colores_piel: string;
}