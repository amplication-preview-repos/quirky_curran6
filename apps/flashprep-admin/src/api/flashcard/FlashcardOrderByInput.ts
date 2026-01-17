import { SortOrder } from "../../util/SortOrder";

export type FlashcardOrderByInput = {
  backContent?: SortOrder;
  cardType?: SortOrder;
  correctOption?: SortOrder;
  createdAt?: SortOrder;
  flashcardDeckId?: SortOrder;
  frontContent?: SortOrder;
  hint?: SortOrder;
  id?: SortOrder;
  options?: SortOrder;
  tags?: SortOrder;
  updatedAt?: SortOrder;
};
