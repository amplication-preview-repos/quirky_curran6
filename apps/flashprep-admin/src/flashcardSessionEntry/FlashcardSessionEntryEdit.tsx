import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { FlashcardTitle } from "../flashcard/FlashcardTitle";
import { FlashcardSessionTitle } from "../flashcardSession/FlashcardSessionTitle";

export const FlashcardSessionEntryEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="bookmarked" source="bookmarked" />
        <ReferenceInput
          source="flashcard.id"
          reference="Flashcard"
          label="flashcard"
        >
          <SelectInput optionText={FlashcardTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="flashcardSession.id"
          reference="FlashcardSession"
          label="flashcardSession"
        >
          <SelectInput optionText={FlashcardSessionTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="rating" source="rating" />
        <NumberInput step={1} label="timeSpent" source="timeSpent" />
      </SimpleForm>
    </Edit>
  );
};
