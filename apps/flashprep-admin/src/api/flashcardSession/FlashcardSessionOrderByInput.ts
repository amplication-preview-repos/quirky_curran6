import { SortOrder } from "../../util/SortOrder";

export type FlashcardSessionOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  endTime?: SortOrder;
  flashcardDeckId?: SortOrder;
  id?: SortOrder;
  progress?: SortOrder;
  sessionType?: SortOrder;
  shuffleMode?: SortOrder;
  startTime?: SortOrder;
  studentProfileId?: SortOrder;
  summaryStats?: SortOrder;
  updatedAt?: SortOrder;
};
