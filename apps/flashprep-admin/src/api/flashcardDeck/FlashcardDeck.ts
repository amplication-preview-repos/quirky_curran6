import { Course } from "../course/Course";
import { ErrorCard } from "../errorCard/ErrorCard";
import { Flashcard } from "../flashcard/Flashcard";

export type FlashcardDeck = {
  course?: Course | null;
  createdAt: Date;
  description: string | null;
  errorCards?: Array<ErrorCard>;
  flashcards?: Array<Flashcard>;
  id: string;
  lastUpdated: Date | null;
  tags: string | null;
  title: string | null;
  updatedAt: Date;
};
