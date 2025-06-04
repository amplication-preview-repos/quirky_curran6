import { CourseSectionWhereUniqueInput } from "../courseSection/CourseSectionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CourseSubSectionWhereInput = {
  courseSection?: CourseSectionWhereUniqueInput;
  icon?: StringNullableFilter;
  id?: StringFilter;
  isLocked?: BooleanNullableFilter;
  isSample?: BooleanNullableFilter;
  order?: IntNullableFilter;
  title?: StringNullableFilter;
};
