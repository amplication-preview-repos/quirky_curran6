import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { CourseSubSectionWhereUniqueInput } from "../courseSubSection/CourseSubSectionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ErrorCardListRelationFilter } from "../errorCard/ErrorCardListRelationFilter";
import { FlashcardSessionListRelationFilter } from "../flashcardSession/FlashcardSessionListRelationFilter";
import { FlashcardListRelationFilter } from "../flashcard/FlashcardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FlashcardDeckWhereInput = {
  course?: CourseWhereUniqueInput;
  courseSubSection?: CourseSubSectionWhereUniqueInput;
  description?: StringNullableFilter;
  errorCards?: ErrorCardListRelationFilter;
  flashcardSessions?: FlashcardSessionListRelationFilter;
  flashcards?: FlashcardListRelationFilter;
  id?: StringFilter;
  isSample?: BooleanNullableFilter;
  lastUpdated?: DateTimeNullableFilter;
  tags?: StringNullableFilter;
  title?: StringNullableFilter;
};
