import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FlashcardWhereUniqueInput } from "../flashcard/FlashcardWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MicrobitWhereInput = {
  feedback?: StringNullableFilter;
  flashcard?: FlashcardWhereUniqueInput;
  forgetCount?: IntNullableFilter;
  highlightedText?: StringNullableFilter;
  id?: StringFilter;
  reviewCount?: IntNullableFilter;
  text?: StringNullableFilter;
};
