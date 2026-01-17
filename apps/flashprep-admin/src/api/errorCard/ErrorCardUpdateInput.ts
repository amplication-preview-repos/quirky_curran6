import { FlashcardWhereUniqueInput } from "../flashcard/FlashcardWhereUniqueInput";
import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { StudentProfileWhereUniqueInput } from "../studentProfile/StudentProfileWhereUniqueInput";

export type ErrorCardUpdateInput = {
  errorCount?: number | null;
  flashcard?: FlashcardWhereUniqueInput | null;
  flashcardDeck?: FlashcardDeckWhereUniqueInput | null;
  studentProfile?: StudentProfileWhereUniqueInput | null;
};
