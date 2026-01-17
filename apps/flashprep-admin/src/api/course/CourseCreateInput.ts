import { CourseSectionCreateNestedManyWithoutCoursesInput } from "./CourseSectionCreateNestedManyWithoutCoursesInput";
import { FlashcardDeckCreateNestedManyWithoutCoursesInput } from "./FlashcardDeckCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  courseSections?: CourseSectionCreateNestedManyWithoutCoursesInput;
  coverImages?: string | null;
  coverVideo?: string | null;
  description?: string | null;
  flashcardDecks?: FlashcardDeckCreateNestedManyWithoutCoursesInput;
  highlights?: string | null;
  showEnrollmentStats?: boolean | null;
  status?: string | null;
};
