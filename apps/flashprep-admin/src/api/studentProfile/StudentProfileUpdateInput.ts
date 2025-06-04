import { ErrorCardUpdateManyWithoutStudentProfilesInput } from "./ErrorCardUpdateManyWithoutStudentProfilesInput";
import { FlashcardSessionUpdateManyWithoutStudentProfilesInput } from "./FlashcardSessionUpdateManyWithoutStudentProfilesInput";

export type StudentProfileUpdateInput = {
  errorCards?: ErrorCardUpdateManyWithoutStudentProfilesInput;
  flashcardSessions?: FlashcardSessionUpdateManyWithoutStudentProfilesInput;
};
