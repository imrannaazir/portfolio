import { TImage } from "./image.types";

export interface TSkill {
  _id: string;
  title: string;
  image?: TImage;
  createdAt?: Date;
  updatedAt?: Date;
}
