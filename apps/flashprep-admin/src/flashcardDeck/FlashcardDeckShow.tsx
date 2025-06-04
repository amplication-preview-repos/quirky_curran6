import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FLASHCARD_TITLE_FIELD } from "../flashcard/FlashcardTitle";
import { FLASHCARDDECK_TITLE_FIELD } from "./FlashcardDeckTitle";
import { STUDENTPROFILE_TITLE_FIELD } from "../studentProfile/StudentProfileTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const FlashcardDeckShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="lastUpdated" source="lastUpdated" />
        <TextField label="tags" source="tags" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ErrorCard"
          target="flashcardDeckId"
          label="ErrorCards"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="errorCount" source="errorCount" />
            <ReferenceField
              label="Flashcard"
              source="flashcard.id"
              reference="Flashcard"
            >
              <TextField source={FLASHCARD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="FlashcardDeck"
              source="flashcarddeck.id"
              reference="FlashcardDeck"
            >
              <TextField source={FLASHCARDDECK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="StudentProfile"
              source="studentprofile.id"
              reference="StudentProfile"
            >
              <TextField source={STUDENTPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Flashcard"
          target="flashcardDeckId"
          label="Flashcards"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="backContent" source="backContent" />
            <TextField label="cardType" source="cardType" />
            <TextField label="correctOption" source="correctOption" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="FlashcardDeck"
              source="flashcarddeck.id"
              reference="FlashcardDeck"
            >
              <TextField source={FLASHCARDDECK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="frontContent" source="frontContent" />
            <TextField label="hint" source="hint" />
            <TextField label="ID" source="id" />
            <TextField label="options" source="options" />
            <TextField label="tags" source="tags" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
