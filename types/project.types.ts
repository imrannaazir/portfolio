import { TImage } from "./image.types";

export type TProject = {
  _id: string;
  title: string;
  description?: string;
  image?: TImage;
  liveLink: string;
  clientGitHub?: string;
  backendGitHub?: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
};
