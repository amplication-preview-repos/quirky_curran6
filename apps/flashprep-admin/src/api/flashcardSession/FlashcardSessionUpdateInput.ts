import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { FlashcardSessionEntryUpdateManyWithoutFlashcardSessionsInput } from "./FlashcardSessionEntryUpdateManyWithoutFlashcardSessionsInput";
import { StudentProfileWhereUniqueInput } from "../studentProfile/StudentProfileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type FlashcardSessionUpdateInput = {
  completed?: boolean | null;
  endTime?: Date | null;
  flashcardDeck?: FlashcardDeckWhereUniqueInput | null;
  flashcardSessionEntries?: FlashcardSessionEntryUpdateManyWithoutFlashcardSessionsInput;
  progress?: number | null;
  sessionType?: string | null;
  shuffleMode?: boolean | null;
  startTime?: Date | null;
  studentProfile?: StudentProfileWhereUniqueInput | null;
  summaryStats?: InputJsonValue;
};
