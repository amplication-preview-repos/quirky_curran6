import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ErrorCardListRelationFilter } from "../errorCard/ErrorCardListRelationFilter";
import { FlashcardListRelationFilter } from "../flashcard/FlashcardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FlashcardDeckWhereInput = {
  course?: CourseWhereUniqueInput;
  description?: StringNullableFilter;
  errorCards?: ErrorCardListRelationFilter;
  flashcards?: FlashcardListRelationFilter;
  id?: StringFilter;
  lastUpdated?: DateTimeNullableFilter;
  tags?: StringNullableFilter;
  title?: StringNullableFilter;
};
