import { AssetCreateNestedManyWithoutCourseSubSectionsInput } from "./AssetCreateNestedManyWithoutCourseSubSectionsInput";
import { CourseSectionWhereUniqueInput } from "../courseSection/CourseSectionWhereUniqueInput";
import { FlashcardDeckCreateNestedManyWithoutCourseSubSectionsInput } from "./FlashcardDeckCreateNestedManyWithoutCourseSubSectionsInput";

export type CourseSubSectionCreateInput = {
  assets?: AssetCreateNestedManyWithoutCourseSubSectionsInput;
  courseSection?: CourseSectionWhereUniqueInput | null;
  flashcardDecks?: FlashcardDeckCreateNestedManyWithoutCourseSubSectionsInput;
  icon?: string | null;
  isLocked?: boolean | null;
  isSample?: boolean | null;
  order?: number | null;
  title?: string | null;
};
