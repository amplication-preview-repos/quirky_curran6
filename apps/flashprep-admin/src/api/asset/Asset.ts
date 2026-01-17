import { CourseSubSection } from "../courseSubSection/CourseSubSection";

export type Asset = {
  courseSubSection?: CourseSubSection | null;
  createdAt: Date;
  id: string;
  isSample: boolean | null;
  updatedAt: Date;
};
