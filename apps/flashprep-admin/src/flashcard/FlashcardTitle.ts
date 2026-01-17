import { Flashcard as TFlashcard } from "../api/flashcard/Flashcard";

export const FLASHCARD_TITLE_FIELD = "cardType";

export const FlashcardTitle = (record: TFlashcard): string => {
  return record.cardType?.toString() || String(record.id);
};
