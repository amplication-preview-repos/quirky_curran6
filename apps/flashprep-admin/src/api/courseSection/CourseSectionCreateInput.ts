import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { CourseSubSectionCreateNestedManyWithoutCourseSectionsInput } from "./CourseSubSectionCreateNestedManyWithoutCourseSectionsInput";

export type CourseSectionCreateInput = {
  course?: CourseWhereUniqueInput | null;
  courseSubSections?: CourseSubSectionCreateNestedManyWithoutCourseSectionsInput;
  icon?: string | null;
  order?: number | null;
  title?: string | null;
};
