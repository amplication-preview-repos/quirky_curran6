import { FlashcardSessionWhereInput } from "./FlashcardSessionWhereInput";
import { FlashcardSessionOrderByInput } from "./FlashcardSessionOrderByInput";

export type FlashcardSessionFindManyArgs = {
  where?: FlashcardSessionWhereInput;
  orderBy?: Array<FlashcardSessionOrderByInput>;
  skip?: number;
  take?: number;
};
