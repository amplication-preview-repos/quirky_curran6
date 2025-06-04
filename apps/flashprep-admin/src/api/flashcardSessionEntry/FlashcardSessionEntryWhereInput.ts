import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FlashcardWhereUniqueInput } from "../flashcard/FlashcardWhereUniqueInput";
import { FlashcardSessionWhereUniqueInput } from "../flashcardSession/FlashcardSessionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FlashcardSessionEntryWhereInput = {
  bookmarked?: BooleanNullableFilter;
  flashcard?: FlashcardWhereUniqueInput;
  flashcardSession?: FlashcardSessionWhereUniqueInput;
  id?: StringFilter;
  microbitsMarked?: JsonFilter;
  rating?: StringNullableFilter;
  timeSpent?: IntNullableFilter;
};
