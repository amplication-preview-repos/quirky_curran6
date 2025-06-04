import { Asset } from "../asset/Asset";
import { CourseSection } from "../courseSection/CourseSection";
import { FlashcardDeck } from "../flashcardDeck/FlashcardDeck";

export type CourseSubSection = {
  assets?: Array<Asset>;
  courseSection?: CourseSection | null;
  createdAt: Date;
  flashcardDecks?: Array<FlashcardDeck>;
  icon: string | null;
  id: string;
  isLocked: boolean | null;
  isSample: boolean | null;
  order: number | null;
  title: string | null;
  updatedAt: Date;
};
