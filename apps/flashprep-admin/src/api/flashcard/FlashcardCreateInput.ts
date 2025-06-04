import { ErrorCardCreateNestedManyWithoutFlashcardsInput } from "./ErrorCardCreateNestedManyWithoutFlashcardsInput";
import { FlashcardDeckWhereUniqueInput } from "../flashcardDeck/FlashcardDeckWhereUniqueInput";
import { MicrobitCreateNestedManyWithoutFlashcardsInput } from "./MicrobitCreateNestedManyWithoutFlashcardsInput";
import { InputJsonValue } from "../../types";

export type FlashcardCreateInput = {
  backContent?: string | null;
  cardType?: string | null;
  correctOption?: string | null;
  errorCards?: ErrorCardCreateNestedManyWithoutFlashcardsInput;
  flashcardDeck?: FlashcardDeckWhereUniqueInput | null;
  frontContent?: string | null;
  hint?: string | null;
  microbits?: MicrobitCreateNestedManyWithoutFlashcardsInput;
  options?: InputJsonValue;
  tags?: string | null;
};
