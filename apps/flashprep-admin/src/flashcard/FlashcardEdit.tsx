import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ErrorCardTitle } from "../errorCard/ErrorCardTitle";
import { FlashcardDeckTitle } from "../flashcardDeck/FlashcardDeckTitle";
import { FlashcardSessionEntryTitle } from "../flashcardSessionEntry/FlashcardSessionEntryTitle";
import { MicrobitTitle } from "../microbit/MicrobitTitle";

export const FlashcardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="backContent" multiline source="backContent" />
        <TextInput label="cardType" source="cardType" />
        <TextInput label="correctOption" source="correctOption" />
        <ReferenceArrayInput source="errorCards" reference="ErrorCard">
          <SelectArrayInput
            optionText={ErrorCardTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="flashcardDeck.id"
          reference="FlashcardDeck"
          label="FlashcardDeck"
        >
          <SelectInput optionText={FlashcardDeckTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="flashcardSessionEntries"
          reference="FlashcardSessionEntry"
        >
          <SelectArrayInput
            optionText={FlashcardSessionEntryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="frontContent" multiline source="frontContent" />
        <TextInput label="hint" multiline source="hint" />
        <ReferenceArrayInput source="microbits" reference="Microbit">
          <SelectArrayInput
            optionText={MicrobitTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <TextInput label="tags" multiline source="tags" />
      </SimpleForm>
    </Edit>
  );
};
