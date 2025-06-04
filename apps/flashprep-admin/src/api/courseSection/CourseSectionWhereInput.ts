import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { CourseSubSectionListRelationFilter } from "../courseSubSection/CourseSubSectionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CourseSectionWhereInput = {
  course?: CourseWhereUniqueInput;
  courseSubSections?: CourseSubSectionListRelationFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  order?: IntNullableFilter;
  title?: StringNullableFilter;
};
