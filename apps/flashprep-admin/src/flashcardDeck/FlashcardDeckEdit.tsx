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
  DateTimeInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";
import { ErrorCardTitle } from "../errorCard/ErrorCardTitle";
import { FlashcardTitle } from "../flashcard/FlashcardTitle";

export const FlashcardDeckEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="Course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput source="errorCards" reference="ErrorCard">
          <SelectArrayInput
            optionText={ErrorCardTitle}
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
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
        <TextInput label="tags" multiline source="tags" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
