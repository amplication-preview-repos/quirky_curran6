import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ErrorCardListRelationFilter } from "../errorCard/ErrorCardListRelationFilter";
import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { FlashcardSessionEntryListRelationFilter } from "../flashcardSessionEntry/FlashcardSessionEntryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MicrobitListRelationFilter } from "../microbit/MicrobitListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type FlashcardWhereInput = {
  backContent?: StringNullableFilter;
  cardType?: StringNullableFilter;
  correctOption?: StringNullableFilter;
  errorCards?: ErrorCardListRelationFilter;
  flashcardDeck?: FlashcardDeckWhereUniqueInput;
  flashcardSessionEntries?: FlashcardSessionEntryListRelationFilter;
  frontContent?: StringNullableFilter;
  hint?: StringNullableFilter;
  id?: StringFilter;
  microbits?: MicrobitListRelationFilter;
  options?: JsonFilter;
  tags?: StringNullableFilter;
};
