import { ErrorCard } from "../errorCard/ErrorCard";
import { FlashcardDeck } from "../flashcardDeck/FlashcardDeck";
import { FlashcardSessionEntry } from "../flashcardSessionEntry/FlashcardSessionEntry";
import { Microbit } from "../microbit/Microbit";
import { JsonValue } from "type-fest";

export type Flashcard = {
  backContent: string | null;
  cardType: string | null;
  correctOption: string | null;
  createdAt: Date;
  errorCards?: Array<ErrorCard>;
  flashcardDeck?: FlashcardDeck | null;
  flashcardSessionEntries?: Array<FlashcardSessionEntry>;
  frontContent: string | null;
  hint: string | null;
  id: string;
  microbits?: Array<Microbit>;
  options: JsonValue;
  tags: string | null;
  updatedAt: Date;
};
