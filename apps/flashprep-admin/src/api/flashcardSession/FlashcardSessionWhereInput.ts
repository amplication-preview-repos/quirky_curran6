import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { FlashcardSessionEntryListRelationFilter } from "../flashcardSessionEntry/FlashcardSessionEntryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentProfileWhereUniqueInput } from "../studentProfile/StudentProfileWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type FlashcardSessionWhereInput = {
  completed?: BooleanNullableFilter;
  endTime?: DateTimeNullableFilter;
  flashcardDeck?: FlashcardDeckWhereUniqueInput;
  flashcardSessionEntries?: FlashcardSessionEntryListRelationFilter;
  id?: StringFilter;
  progress?: FloatNullableFilter;
  sessionType?: StringNullableFilter;
  shuffleMode?: BooleanNullableFilter;
  startTime?: DateTimeNullableFilter;
  studentProfile?: StudentProfileWhereUniqueInput;
  summaryStats?: JsonFilter;
};
