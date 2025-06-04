import { FlashcardDeck } from "../flashcardDeck/FlashcardDeck";

export type Course = {
  createdAt: Date;
  flashcardDecks?: Array<FlashcardDeck>;
  id: string;
  updatedAt: Date;
};
