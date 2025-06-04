import { CourseSection } from "../courseSection/CourseSection";

export type CourseSubSection = {
  courseSection?: CourseSection | null;
  createdAt: Date;
  icon: string | null;
  id: string;
  isLocked: boolean | null;
  isSample: boolean | null;
  order: number | null;
  title: string | null;
  updatedAt: Date;
};
