import { CourseSectionUpdateManyWithoutCoursesInput } from "./CourseSectionUpdateManyWithoutCoursesInput";
import { FlashcardDeckUpdateManyWithoutCoursesInput } from "./FlashcardDeckUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  courseSections?: CourseSectionUpdateManyWithoutCoursesInput;
  coverImages?: string | null;
  coverVideo?: string | null;
  description?: string | null;
  flashcardDecks?: FlashcardDeckUpdateManyWithoutCoursesInput;
  highlights?: string | null;
  showEnrollmentStats?: boolean | null;
  status?: string | null;
};
