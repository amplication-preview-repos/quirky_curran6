import { FlashcardSessionEntryWhereInput } from "./FlashcardSessionEntryWhereInput";
import { FlashcardSessionEntryOrderByInput } from "./FlashcardSessionEntryOrderByInput";

export type FlashcardSessionEntryFindManyArgs = {
  where?: FlashcardSessionEntryWhereInput;
  orderBy?: Array<FlashcardSessionEntryOrderByInput>;
  skip?: number;
  take?: number;
};
