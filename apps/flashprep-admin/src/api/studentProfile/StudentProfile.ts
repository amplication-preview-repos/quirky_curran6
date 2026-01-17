import { ErrorCard } from "../errorCard/ErrorCard";
import { FlashcardSession } from "../flashcardSession/FlashcardSession";

export type StudentProfile = {
  createdAt: Date;
  errorCards?: Array<ErrorCard>;
  flashcardSessions?: Array<FlashcardSession>;
  id: string;
  updatedAt: Date;
};
