import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { CourseSubSectionWhereUniqueInput } from "../courseSubSection/CourseSubSectionWhereUniqueInput";
import { ErrorCardCreateNestedManyWithoutFlashcardDecksInput } from "./ErrorCardCreateNestedManyWithoutFlashcardDecksInput";
import { FlashcardSessionCreateNestedManyWithoutFlashcardDecksInput } from "./FlashcardSessionCreateNestedManyWithoutFlashcardDecksInput";
import { FlashcardCreateNestedManyWithoutFlashcardDecksInput } from "./FlashcardCreateNestedManyWithoutFlashcardDecksInput";

export type FlashcardDeckCreateInput = {
  course?: CourseWhereUniqueInput | null;
  courseSubSection?: CourseSubSectionWhereUniqueInput | null;
  description?: string | null;
  errorCards?: ErrorCardCreateNestedManyWithoutFlashcardDecksInput;
  flashcardSessions?: FlashcardSessionCreateNestedManyWithoutFlashcardDecksInput;
  flashcards?: FlashcardCreateNestedManyWithoutFlashcardDecksInput;
  isSample?: boolean | null;
  lastUpdated?: Date | null;
  tags?: string | null;
  title?: string | null;
};
