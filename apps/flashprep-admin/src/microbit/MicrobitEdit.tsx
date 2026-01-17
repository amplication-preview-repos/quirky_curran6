import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { FlashcardTitle } from "../flashcard/FlashcardTitle";

export const MicrobitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
