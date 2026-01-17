import { ErrorCardCreateNestedManyWithoutStudentProfilesInput } from "./ErrorCardCreateNestedManyWithoutStudentProfilesInput";
import { FlashcardSessionCreateNestedManyWithoutStudentProfilesInput } from "./FlashcardSessionCreateNestedManyWithoutStudentProfilesInput";

export type StudentProfileCreateInput = {
  errorCards?: ErrorCardCreateNestedManyWithoutStudentProfilesInput;
  flashcardSessions?: FlashcardSessionCreateNestedManyWithoutStudentProfilesInput;
};
