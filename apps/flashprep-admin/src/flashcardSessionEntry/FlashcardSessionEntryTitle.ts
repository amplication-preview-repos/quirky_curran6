import { FlashcardSessionEntry as TFlashcardSessionEntry } from "../api/flashcardSessionEntry/FlashcardSessionEntry";

export const FLASHCARDSESSIONENTRY_TITLE_FIELD = "rating";

export const FlashcardSessionEntryTitle = (
  record: TFlashcardSessionEntry
): string => {
  return record.rating?.toString() || String(record.id);
};
