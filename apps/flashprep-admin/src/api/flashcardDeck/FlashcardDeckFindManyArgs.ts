import { FlashcardDeckWhereInput } from "./FlashcardDeckWhereInput";
import { FlashcardDeckOrderByInput } from "./FlashcardDeckOrderByInput";

export type FlashcardDeckFindManyArgs = {
  where?: FlashcardDeckWhereInput;
  orderBy?: Array<FlashcardDeckOrderByInput>;
  skip?: number;
  take?: number;
};
