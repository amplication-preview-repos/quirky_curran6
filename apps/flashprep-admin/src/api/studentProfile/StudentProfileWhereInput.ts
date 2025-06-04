import { ErrorCardListRelationFilter } from "../errorCard/ErrorCardListRelationFilter";
import { FlashcardSessionListRelationFilter } from "../flashcardSession/FlashcardSessionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentProfileWhereInput = {
  errorCards?: ErrorCardListRelationFilter;
  flashcardSessions?: FlashcardSessionListRelationFilter;
  id?: StringFilter;
};
