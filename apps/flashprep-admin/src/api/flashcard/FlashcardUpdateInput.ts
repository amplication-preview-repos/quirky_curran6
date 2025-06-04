import { ErrorCardUpdateManyWithoutFlashcardsInput } from "./ErrorCardUpdateManyWithoutFlashcardsInput";
import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { FlashcardSessionEntryUpdateManyWithoutFlashcardsInput } from "./FlashcardSessionEntryUpdateManyWithoutFlashcardsInput";
import { MicrobitUpdateManyWithoutFlashcardsInput } from "./MicrobitUpdateManyWithoutFlashcardsInput";
import { InputJsonValue } from "../../types";

export type FlashcardUpdateInput = {
  backContent?: string | null;
  cardType?: string | null;
  correctOption?: string | null;
  errorCards?: ErrorCardUpdateManyWithoutFlashcardsInput;
  flashcardDeck?: FlashcardDeckWhereUniqueInput | null;
  flashcardSessionEntries?: FlashcardSessionEntryUpdateManyWithoutFlashcardsInput;
  frontContent?: string | null;
  hint?: string | null;
  microbits?: MicrobitUpdateManyWithoutFlashcardsInput;
  options?: InputJsonValue;
  tags?: string | null;
};
