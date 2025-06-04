import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { CourseSectionTitle } from "../courseSection/CourseSectionTitle";
import { FlashcardDeckTitle } from "../flashcardDeck/FlashcardDeckTitle";

export const CourseSubSectionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="assets" reference="Asset">
          <SelectArrayInput
            optionText={AssetTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="courseSection.id"
          reference="CourseSection"
          label="CourseSection"
        >
          <SelectInput optionText={CourseSectionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="flashcardDecks" reference="FlashcardDeck">
          <SelectArrayInput
            optionText={FlashcardDeckTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="icon" source="icon" />
        <BooleanInput label="isLocked" source="isLocked" />
        <BooleanInput label="isSample" source="isSample" />
        <NumberInput step={1} label="order" source="order" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
