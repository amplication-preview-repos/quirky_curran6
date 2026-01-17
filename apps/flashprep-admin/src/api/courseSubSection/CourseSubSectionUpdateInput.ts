import { AssetUpdateManyWithoutCourseSubSectionsInput } from "./AssetUpdateManyWithoutCourseSubSectionsInput";
import { CourseSectionWhereUniqueInput } from "../courseSection/CourseSectionWhereUniqueInput";
import { FlashcardDeckUpdateManyWithoutCourseSubSectionsInput } from "./FlashcardDeckUpdateManyWithoutCourseSubSectionsInput";

export type CourseSubSectionUpdateInput = {
  assets?: AssetUpdateManyWithoutCourseSubSectionsInput;
  courseSection?: CourseSectionWhereUniqueInput | null;
  flashcardDecks?: FlashcardDeckUpdateManyWithoutCourseSubSectionsInput;
  icon?: string | null;
  isLocked?: boolean | null;
  isSample?: boolean | null;
  order?: number | null;
  title?: string | null;
};
