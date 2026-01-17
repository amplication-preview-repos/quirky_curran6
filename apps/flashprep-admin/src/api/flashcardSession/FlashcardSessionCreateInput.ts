import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { FlashcardSessionEntryCreateNestedManyWithoutFlashcardSessionsInput } from "./FlashcardSessionEntryCreateNestedManyWithoutFlashcardSessionsInput";
import { StudentProfileWhereUniqueInput } from "../studentProfile/StudentProfileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type FlashcardSessionCreateInput = {
  completed?: boolean | null;
  endTime?: Date | null;
  flashcardDeck?: FlashcardDeckWhereUniqueInput | null;
  flashcardSessionEntries?: FlashcardSessionEntryCreateNestedManyWithoutFlashcardSessionsInput;
  progress?: number | null;
  sessionType?: string | null;
  shuffleMode?: boolean | null;
  startTime?: Date | null;
  studentProfile?: StudentProfileWhereUniqueInput | null;
  summaryStats?: InputJsonValue;
};
