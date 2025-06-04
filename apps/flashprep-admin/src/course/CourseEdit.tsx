import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CourseSectionTitle } from "../courseSection/CourseSectionTitle";
import { FlashcardDeckTitle } from "../flashcardDeck/FlashcardDeckTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="courseSections" reference="CourseSection">
          <SelectArrayInput
            optionText={CourseSectionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="coverImages" multiline source="coverImages" />
        <TextInput label="coverVideo" source="coverVideo" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput source="flashcardDecks" reference="FlashcardDeck">
          <SelectArrayInput
            optionText={FlashcardDeckTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="highlights" multiline source="highlights" />
        <BooleanInput
          label="showEnrollmentStats"
          source="showEnrollmentStats"
        />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
