import { ErrorCard } from "../errorCard/ErrorCard";

export type StudentProfile = {
  createdAt: Date;
  errorCards?: Array<ErrorCard>;
  id: string;
  updatedAt: Date;
};
