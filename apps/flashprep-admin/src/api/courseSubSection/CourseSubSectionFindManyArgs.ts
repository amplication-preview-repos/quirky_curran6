import { CourseSubSectionWhereInput } from "./CourseSubSectionWhereInput";
import { CourseSubSectionOrderByInput } from "./CourseSubSectionOrderByInput";

export type CourseSubSectionFindManyArgs = {
  where?: CourseSubSectionWhereInput;
  orderBy?: Array<CourseSubSectionOrderByInput>;
  skip?: number;
  take?: number;
};
