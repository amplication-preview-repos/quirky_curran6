import { FlashcardSession as TFlashcardSession } from "../api/flashcardSession/FlashcardSession";

export const FLASHCARDSESSION_TITLE_FIELD = "sessionType";

export const FlashcardSessionTitle = (record: TFlashcardSession): string => {
  return record.sessionType?.toString() || String(record.id);
};
