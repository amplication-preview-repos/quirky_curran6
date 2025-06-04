import { CourseSectionListRelationFilter } from "../courseSection/CourseSectionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FlashcardDeckListRelationFilter } from "../flashcardDeck/FlashcardDeckListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CourseWhereInput = {
  courseSections?: CourseSectionListRelationFilter;
  coverImages?: StringNullableFilter;
  coverVideo?: StringNullableFilter;
  description?: StringNullableFilter;
  flashcardDecks?: FlashcardDeckListRelationFilter;
  highlights?: StringNullableFilter;
  id?: StringFilter;
  showEnrollmentStats?: BooleanNullableFilter;
  status?: StringNullableFilter;
};
