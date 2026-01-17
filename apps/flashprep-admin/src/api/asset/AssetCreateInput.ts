import { CourseSubSectionWhereUniqueInput } from "../courseSubSection/CourseSubSectionWhereUniqueInput";

export type AssetCreateInput = {
  courseSubSection?: CourseSubSectionWhereUniqueInput | null;
  isSample?: boolean | null;
};
