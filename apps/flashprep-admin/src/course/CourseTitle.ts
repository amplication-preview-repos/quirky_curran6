import { Course as TCourse } from "../api/course/Course";

export const COURSE_TITLE_FIELD = "coverVideo";

export const CourseTitle = (record: TCourse): string => {
  return record.coverVideo?.toString() || String(record.id);
};
