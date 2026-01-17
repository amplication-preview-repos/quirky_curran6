import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { FLASHCARD_TITLE_FIELD } from "../flashcard/FlashcardTitle";
import { FLASHCARDDECK_TITLE_FIELD } from "../flashcardDeck/FlashcardDeckTitle";
import { STUDENTPROFILE_TITLE_FIELD } from "./StudentProfileTitle";

export const StudentProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ErrorCard"
          target="studentProfileId"
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
          target="studentProfileId"
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
      </SimpleShowLayout>
    </Show>
  );
};
