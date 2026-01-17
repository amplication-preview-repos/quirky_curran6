import { CourseSection as TCourseSection } from "../api/courseSection/CourseSection";

export const COURSESECTION_TITLE_FIELD = "title";

export const CourseSectionTitle = (record: TCourseSection): string => {
  return record.title?.toString() || String(record.id);
};
