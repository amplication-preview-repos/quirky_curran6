import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { FlashcardTitle } from "../flashcard/FlashcardTitle";

export const MicrobitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="feedback" source="feedback" />
        <ReferenceInput
          source="flashcard.id"
          reference="Flashcard"
          label="Flashcard"
        >
          <SelectInput optionText={FlashcardTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="forgetCount" source="forgetCount" />
        <TextInput label="highlightedText" source="highlightedText" />
        <NumberInput step={1} label="reviewCount" source="reviewCount" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
