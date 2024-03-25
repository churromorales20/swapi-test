import { IFan } from "./IFan";

export interface IFanSwapiValidationResult {
  is_valid: boolean;
  errors: string[];
  fan: IFan | null;
}