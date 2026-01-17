import { SortOrder } from "../../util/SortOrder";

export type MicrobitOrderByInput = {
  createdAt?: SortOrder;
  feedback?: SortOrder;
  flashcardId?: SortOrder;
  forgetCount?: SortOrder;
  highlightedText?: SortOrder;
  id?: SortOrder;
  reviewCount?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
