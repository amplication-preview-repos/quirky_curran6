import { CourseSubSectionWhereUniqueInput } from "../courseSubSection/CourseSubSectionWhereUniqueInput";

export type AssetUpdateInput = {
  courseSubSection?: CourseSubSectionWhereUniqueInput | null;
  isSample?: boolean | null;
};
