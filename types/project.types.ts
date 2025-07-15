import { TImage } from "./image.types";

export type TProject = {
  id: string;
  category?: string;
  status?: string;
  title: string;
  description: string;
  liveLink: string;
  github?: string;
  clientGitHub?: string;
  backendGitHub?: string;
  image: string;
  technologies: string[];
};

