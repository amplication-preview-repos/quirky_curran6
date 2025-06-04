import { CourseSubSectionWhereUniqueInput } from "../courseSubSection/CourseSubSectionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AssetWhereInput = {
  courseSubSection?: CourseSubSectionWhereUniqueInput;
  id?: StringFilter;
  isSample?: BooleanNullableFilter;
};
