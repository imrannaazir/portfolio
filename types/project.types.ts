import { TImage } from "./image.types";

export type TProject = {
  id: string;
  title: string;
  description: string;
  liveLink: string;
  clientGitHub: string;
  backendGitHub?: string;
  image: string;
  technologies: string[];
};

