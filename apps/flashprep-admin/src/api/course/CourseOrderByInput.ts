import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  coverImages?: SortOrder;
  coverVideo?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  highlights?: SortOrder;
  id?: SortOrder;
  showEnrollmentStats?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
