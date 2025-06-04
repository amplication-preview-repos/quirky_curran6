import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { ErrorCardUpdateManyWithoutFlashcardDecksInput } from "./ErrorCardUpdateManyWithoutFlashcardDecksInput";
import { FlashcardUpdateManyWithoutFlashcardDecksInput } from "./FlashcardUpdateManyWithoutFlashcardDecksInput";

export type FlashcardDeckUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  description?: string | null;
  errorCards?: ErrorCardUpdateManyWithoutFlashcardDecksInput;
  flashcards?: FlashcardUpdateManyWithoutFlashcardDecksInput;
  lastUpdated?: Date | null;
  tags?: string | null;
  title?: string | null;
};
