import { CourseSectionWhereUniqueInput } from "../courseSection/CourseSectionWhereUniqueInput";

export type CourseSubSectionCreateInput = {
  courseSection?: CourseSectionWhereUniqueInput | null;
  icon?: string | null;
  isLocked?: boolean | null;
  isSample?: boolean | null;
  order?: number | null;
  title?: string | null;
};
