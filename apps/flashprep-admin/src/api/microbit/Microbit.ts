import { Flashcard } from "../flashcard/Flashcard";

export type Microbit = {
  createdAt: Date;
  feedback: string | null;
  flashcard?: Flashcard | null;
  forgetCount: number | null;
  highlightedText: string | null;
  id: string;
  reviewCount: number | null;
  text: string | null;
  updatedAt: Date;
};
