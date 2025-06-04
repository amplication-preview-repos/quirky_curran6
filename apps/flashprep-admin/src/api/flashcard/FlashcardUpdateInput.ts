import { ErrorCardUpdateManyWithoutFlashcardsInput } from "./ErrorCardUpdateManyWithoutFlashcardsInput";
import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { MicrobitUpdateManyWithoutFlashcardsInput } from "./MicrobitUpdateManyWithoutFlashcardsInput";
import { InputJsonValue } from "../../types";

export type FlashcardUpdateInput = {
  backContent?: string | null;
  cardType?: string | null;
  correctOption?: string | null;
  errorCards?: ErrorCardUpdateManyWithoutFlashcardsInput;
  flashcardDeck?: FlashcardDeckWhereUniqueInput | null;
  frontContent?: string | null;
  hint?: string | null;
  microbits?: MicrobitUpdateManyWithoutFlashcardsInput;
  options?: InputJsonValue;
  tags?: string | null;
};
