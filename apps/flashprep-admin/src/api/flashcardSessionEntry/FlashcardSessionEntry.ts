import { Flashcard } from "../flashcard/Flashcard";
import { FlashcardSession } from "../flashcardSession/FlashcardSession";
import { JsonValue } from "type-fest";

export type FlashcardSessionEntry = {
  bookmarked: boolean | null;
  createdAt: Date;
  flashcard?: Flashcard | null;
  flashcardSession?: FlashcardSession | null;
  id: string;
  microbitsMarked: JsonValue;
  rating: string | null;
  timeSpent: number | null;
  updatedAt: Date;
};
