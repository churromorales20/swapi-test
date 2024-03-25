import { IsNotEmpty, IsString, IsISO31661Alpha2, IsInt, Min } from 'class-validator';

export class FanDto {
  @IsNotEmpty({ message: 'First name is required.' })
  @IsString({ message: 'First name must be a string.' })
  first_name: string;

  @IsNotEmpty({ message: 'Last name is required.' })
  @IsString({ message: 'Last name must be a string.' })
  last_name: string;

  @IsNotEmpty({ message: 'Nickname is required.' })
  @IsString({ message: 'Nickname must be a string.' })
  nickname: string;

  @IsNotEmpty({ message: 'Country is required.' })
  @IsString({ message: 'Country must be a string.' })
  @IsISO31661Alpha2({ message: 'Country must be a valid ISO-3166-1 alpha-2 code.' })
  country: string;

  @IsNotEmpty({ message: 'Species ID is required.' })
  @IsInt({ message: 'Species ID must be an integer.' })
  @Min(1, { message: 'Species ID must be greater than or equal to 1.' })
  species_id: number;

  @IsNotEmpty({ message: 'Home planet ID is required.' })
  @IsInt({ message: 'Home planet ID must be an integer.' })
  @Min(1, { message: 'Home planet ID must be greater than or equal to 1.' })
  home_planet_id: number;

  @IsNotEmpty({ message: 'Favorite character ID is required.' })
  @IsInt({ message: 'Favorite character ID must be an integer.' })
  @Min(1, { message: 'Favorite character ID must be greater than or equal to 1.' })
  favorite_character_id: number;

  @IsNotEmpty({ message: 'Favorite film ID is required.' })
  @IsInt({ message: 'Favorite film ID must be an integer.' })
  @Min(1, { message: 'Favorite film ID must be greater than or equal to 1.' })
  favorite_film_id: number;
}
