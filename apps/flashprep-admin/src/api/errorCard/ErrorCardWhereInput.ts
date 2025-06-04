import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FlashcardWhereUniqueInput } from "../flashcard/FlashcardWhereUniqueInput";
import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StudentProfileWhereUniqueInput } from "../studentProfile/StudentProfileWhereUniqueInput";

export type ErrorCardWhereInput = {
  errorCount?: IntNullableFilter;
  flashcard?: FlashcardWhereUniqueInput;
  flashcardDeck?: FlashcardDeckWhereUniqueInput;
  id?: StringFilter;
  studentProfile?: StudentProfileWhereUniqueInput;
};
