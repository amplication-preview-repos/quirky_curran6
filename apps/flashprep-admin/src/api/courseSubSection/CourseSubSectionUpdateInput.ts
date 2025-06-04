import { CourseSectionWhereUniqueInput } from "../courseSection/CourseSectionWhereUniqueInput";

export type CourseSubSectionUpdateInput = {
  courseSection?: CourseSectionWhereUniqueInput | null;
  icon?: string | null;
  isLocked?: boolean | null;
  isSample?: boolean | null;
  order?: number | null;
  title?: string | null;
};
