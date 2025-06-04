import { SortOrder } from "../../util/SortOrder";

export type ErrorCardOrderByInput = {
  createdAt?: SortOrder;
  errorCount?: SortOrder;
  flashcardId?: SortOrder;
  flashcardDeckId?: SortOrder;
  id?: SortOrder;
  studentProfileId?: SortOrder;
  updatedAt?: SortOrder;
};
