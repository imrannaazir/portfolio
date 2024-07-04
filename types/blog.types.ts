import { TImage } from "./image.types";

export interface TBlog {
  _id: string;
  title: string;
  image?: TImage;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}
