import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { CourseSubSectionWhereUniqueInput } from "../courseSubSection/CourseSubSectionWhereUniqueInput";
import { ErrorCardUpdateManyWithoutFlashcardDecksInput } from "./ErrorCardUpdateManyWithoutFlashcardDecksInput";
import { FlashcardSessionUpdateManyWithoutFlashcardDecksInput } from "./FlashcardSessionUpdateManyWithoutFlashcardDecksInput";
import { FlashcardUpdateManyWithoutFlashcardDecksInput } from "./FlashcardUpdateManyWithoutFlashcardDecksInput";

export type FlashcardDeckUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  courseSubSection?: CourseSubSectionWhereUniqueInput | null;
  description?: string | null;
  errorCards?: ErrorCardUpdateManyWithoutFlashcardDecksInput;
  flashcardSessions?: FlashcardSessionUpdateManyWithoutFlashcardDecksInput;
  flashcards?: FlashcardUpdateManyWithoutFlashcardDecksInput;
  isSample?: boolean | null;
  lastUpdated?: Date | null;
  tags?: string | null;
  title?: string | null;
};
