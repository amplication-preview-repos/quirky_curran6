import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { FlashcardDeckTitle } from "../flashcardDeck/FlashcardDeckTitle";
import { FlashcardSessionEntryTitle } from "../flashcardSessionEntry/FlashcardSessionEntryTitle";
import { StudentProfileTitle } from "../studentProfile/StudentProfileTitle";

export const FlashcardSessionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="completed" source="completed" />
        <DateTimeInput label="endTime" source="endTime" />
        <ReferenceInput
          source="flashcardDeck.id"
          reference="FlashcardDeck"
          label="flashcardDeck"
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
        <NumberInput label="progress" source="progress" />
        <TextInput label="sessionType" source="sessionType" />
        <BooleanInput label="shuffleMode" source="shuffleMode" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceInput
          source="studentProfile.id"
          reference="StudentProfile"
          label="studentProfile"
        >
          <SelectInput optionText={StudentProfileTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
