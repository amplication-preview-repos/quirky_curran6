import { FlashcardWhereUniqueInput } from "../flashcard/FlashcardWhereUniqueInput";

export type MicrobitUpdateInput = {
  feedback?: string | null;
  flashcard?: FlashcardWhereUniqueInput | null;
  forgetCount?: number | null;
  highlightedText?: string | null;
  reviewCount?: number | null;
  text?: string | null;
};
