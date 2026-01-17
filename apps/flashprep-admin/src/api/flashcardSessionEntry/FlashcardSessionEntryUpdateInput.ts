import { FlashcardWhereUniqueInput } from "../flashcard/FlashcardWhereUniqueInput";
import { FlashcardSessionWhereUniqueInput } from "../flashcardSession/FlashcardSessionWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type FlashcardSessionEntryUpdateInput = {
  bookmarked?: boolean | null;
  flashcard?: FlashcardWhereUniqueInput | null;
  flashcardSession?: FlashcardSessionWhereUniqueInput | null;
  microbitsMarked?: InputJsonValue;
  rating?: string | null;
  timeSpent?: number | null;
};
