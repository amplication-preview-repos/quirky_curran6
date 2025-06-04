import { FlashcardDeckListRelationFilter } from "../flashcardDeck/FlashcardDeckListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  flashcardDecks?: FlashcardDeckListRelationFilter;
  id?: StringFilter;
};
