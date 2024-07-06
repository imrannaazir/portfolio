import { TImage } from "./image.types";

export interface TSkill {
  _id: string;
  label: string;
  image?: TImage;
  createdAt?: Date;
  updatedAt?: Date;
}
