import { FlashcardDeck as TFlashcardDeck } from "../api/flashcardDeck/FlashcardDeck";

export const FLASHCARDDECK_TITLE_FIELD = "title";

export const FlashcardDeckTitle = (record: TFlashcardDeck): string => {
  return record.title?.toString() || String(record.id);
};
