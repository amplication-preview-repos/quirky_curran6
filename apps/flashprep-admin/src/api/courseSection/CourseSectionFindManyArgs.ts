import { CourseSectionWhereInput } from "./CourseSectionWhereInput";
import { CourseSectionOrderByInput } from "./CourseSectionOrderByInput";

export type CourseSectionFindManyArgs = {
  where?: CourseSectionWhereInput;
  orderBy?: Array<CourseSectionOrderByInput>;
  skip?: number;
  take?: number;
};
