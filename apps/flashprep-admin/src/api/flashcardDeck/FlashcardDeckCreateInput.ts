import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ErrorCardCreateNestedManyWithoutFlashcardDecksInput } from "./ErrorCardCreateNestedManyWithoutFlashcardDecksInput";
import { FlashcardCreateNestedManyWithoutFlashcardDecksInput } from "./FlashcardCreateNestedManyWithoutFlashcardDecksInput";

export type FlashcardDeckCreateInput = {
  course?: CourseWhereUniqueInput | null;
  description?: string | null;
  errorCards?: ErrorCardCreateNestedManyWithoutFlashcardDecksInput;
  flashcards?: FlashcardCreateNestedManyWithoutFlashcardDecksInput;
  lastUpdated?: Date | null;
  tags?: string | null;
  title?: string | null;
};
