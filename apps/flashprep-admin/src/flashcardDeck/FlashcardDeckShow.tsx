import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FLASHCARD_TITLE_FIELD } from "../flashcard/FlashcardTitle";
import { FLASHCARDDECK_TITLE_FIELD } from "./FlashcardDeckTitle";
import { STUDENTPROFILE_TITLE_FIELD } from "../studentProfile/StudentProfileTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { COURSESUBSECTION_TITLE_FIELD } from "../courseSubSection/CourseSubSectionTitle";

export const FlashcardDeckShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="CourseSubSection"
          source="coursesubsection.id"
          reference="CourseSubSection"
        >
          <TextField source={COURSESUBSECTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isSample" source="isSample" />
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
          reference="FlashcardSession"
          target="flashcardDeckId"
          label="FlashcardSessions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="completed" source="completed" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="endTime" source="endTime" />
            <ReferenceField
              label="flashcardDeck"
              source="flashcarddeck.id"
              reference="FlashcardDeck"
            >
              <TextField source={FLASHCARDDECK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="progress" source="progress" />
            <TextField label="sessionType" source="sessionType" />
            <BooleanField label="shuffleMode" source="shuffleMode" />
            <TextField label="startTime" source="startTime" />
            <ReferenceField
              label="studentProfile"
              source="studentprofile.id"
              reference="StudentProfile"
            >
              <TextField source={STUDENTPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="summaryStats" source="summaryStats" />
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
