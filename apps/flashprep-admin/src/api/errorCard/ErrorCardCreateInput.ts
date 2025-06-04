import { FlashcardWhereUniqueInput } from "../flashcard/FlashcardWhereUniqueInput";
import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { StudentProfileWhereUniqueInput } from "../studentProfile/StudentProfileWhereUniqueInput";

export type ErrorCardCreateInput = {
  errorCount?: number | null;
  flashcard?: FlashcardWhereUniqueInput | null;
  flashcardDeck?: FlashcardDeckWhereUniqueInput | null;
  studentProfile?: StudentProfileWhereUniqueInput | null;
};
