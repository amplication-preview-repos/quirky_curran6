import { CourseSection } from "../courseSection/CourseSection";
import { FlashcardDeck } from "../flashcardDeck/FlashcardDeck";

export type Course = {
  courseSections?: Array<CourseSection>;
  coverImages: string | null;
  coverVideo: string | null;
  createdAt: Date;
  description: string | null;
  flashcardDecks?: Array<FlashcardDeck>;
  highlights: string | null;
  id: string;
  showEnrollmentStats: boolean | null;
  status: string | null;
  updatedAt: Date;
};
