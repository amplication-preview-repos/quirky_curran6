import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { CourseSubSectionTitle } from "../courseSubSection/CourseSubSectionTitle";
import { ErrorCardTitle } from "../errorCard/ErrorCardTitle";
import { FlashcardSessionTitle } from "../flashcardSession/FlashcardSessionTitle";
import { FlashcardTitle } from "../flashcard/FlashcardTitle";

export const FlashcardDeckEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="courseSubSection.id"
          reference="CourseSubSection"
          label="CourseSubSection"
        >
          <SelectInput optionText={CourseSubSectionTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput source="errorCards" reference="ErrorCard">
          <SelectArrayInput
            optionText={ErrorCardTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="flashcardSessions"
          reference="FlashcardSession"
        >
          <SelectArrayInput
            optionText={FlashcardSessionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="flashcards" reference="Flashcard">
          <SelectArrayInput
            optionText={FlashcardTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="isSample" source="isSample" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <TextInput label="tags" multiline source="tags" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
