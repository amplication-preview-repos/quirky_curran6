import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FlashcardTitle } from "../flashcard/FlashcardTitle";
import { FlashcardDeckTitle } from "../flashcardDeck/FlashcardDeckTitle";
import { StudentProfileTitle } from "../studentProfile/StudentProfileTitle";

export const ErrorCardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="errorCount" source="errorCount" />
        <ReferenceInput
          source="flashcard.id"
          reference="Flashcard"
          label="Flashcard"
        >
          <SelectInput optionText={FlashcardTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="flashcardDeck.id"
          reference="FlashcardDeck"
          label="FlashcardDeck"
        >
          <SelectInput optionText={FlashcardDeckTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="studentProfile.id"
          reference="StudentProfile"
          label="StudentProfile"
        >
          <SelectInput optionText={StudentProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
