import { SortOrder } from "../../util/SortOrder";

export type FlashcardSessionEntryOrderByInput = {
  bookmarked?: SortOrder;
  createdAt?: SortOrder;
  flashcardId?: SortOrder;
  flashcardSessionId?: SortOrder;
  id?: SortOrder;
  microbitsMarked?: SortOrder;
  rating?: SortOrder;
  timeSpent?: SortOrder;
  updatedAt?: SortOrder;
};
