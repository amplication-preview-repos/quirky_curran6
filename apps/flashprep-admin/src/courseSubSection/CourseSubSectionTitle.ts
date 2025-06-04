import { CourseSubSection as TCourseSubSection } from "../api/courseSubSection/CourseSubSection";

export const COURSESUBSECTION_TITLE_FIELD = "title";

export const CourseSubSectionTitle = (record: TCourseSubSection): string => {
  return record.title?.toString() || String(record.id);
};
