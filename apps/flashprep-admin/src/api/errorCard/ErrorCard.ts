import { Flashcard } from "../flashcard/Flashcard";
import { FlashcardDeck } from "../flashcardDeck/FlashcardDeck";
import { StudentProfile } from "../studentProfile/StudentProfile";

export type ErrorCard = {
  createdAt: Date;
  errorCount: number | null;
  flashcard?: Flashcard | null;
  flashcardDeck?: FlashcardDeck | null;
  id: string;
  studentProfile?: StudentProfile | null;
  updatedAt: Date;
};
