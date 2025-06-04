import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { CourseSubSectionUpdateManyWithoutCourseSectionsInput } from "./CourseSubSectionUpdateManyWithoutCourseSectionsInput";

export type CourseSectionUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  courseSubSections?: CourseSubSectionUpdateManyWithoutCourseSectionsInput;
  icon?: string | null;
  order?: number | null;
  title?: string | null;
};
