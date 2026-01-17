import { FlashcardDeck } from "../flashcardDeck/FlashcardDeck";
import { FlashcardSessionEntry } from "../flashcardSessionEntry/FlashcardSessionEntry";
import { StudentProfile } from "../studentProfile/StudentProfile";
import { JsonValue } from "type-fest";

export type FlashcardSession = {
  completed: boolean | null;
  createdAt: Date;
  endTime: Date | null;
  flashcardDeck?: FlashcardDeck | null;
  flashcardSessionEntries?: Array<FlashcardSessionEntry>;
  id: string;
  progress: number | null;
  sessionType: string | null;
  shuffleMode: boolean | null;
  startTime: Date | null;
  studentProfile?: StudentProfile | null;
  summaryStats: JsonValue;
  updatedAt: Date;
};
