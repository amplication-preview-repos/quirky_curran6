import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { CourseSectionWhereUniqueInput } from "../courseSection/CourseSectionWhereUniqueInput";
import { FlashcardDeckListRelationFilter } from "../flashcardDeck/FlashcardDeckListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CourseSubSectionWhereInput = {
  assets?: AssetListRelationFilter;
  courseSection?: CourseSectionWhereUniqueInput;
  flashcardDecks?: FlashcardDeckListRelationFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  isLocked?: BooleanNullableFilter;
  isSample?: BooleanNullableFilter;
  order?: IntNullableFilter;
  title?: StringNullableFilter;
};
