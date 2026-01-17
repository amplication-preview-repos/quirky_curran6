import { SortOrder } from "../../util/SortOrder";

export type FlashcardDeckOrderByInput = {
  courseId?: SortOrder;
  courseSubSectionId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isSample?: SortOrder;
  lastUpdated?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
