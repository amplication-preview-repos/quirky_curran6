import { Course } from "../course/Course";
import { CourseSubSection } from "../courseSubSection/CourseSubSection";

export type CourseSection = {
  course?: Course | null;
  courseSubSections?: Array<CourseSubSection>;
  createdAt: Date;
  icon: string | null;
  id: string;
  order: number | null;
  title: string | null;
  updatedAt: Date;
};
