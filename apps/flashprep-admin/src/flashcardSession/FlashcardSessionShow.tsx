import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FLASHCARD_TITLE_FIELD } from "../flashcard/FlashcardTitle";
import { FLASHCARDSESSION_TITLE_FIELD } from "./FlashcardSessionTitle";
import { FLASHCARDDECK_TITLE_FIELD } from "../flashcardDeck/FlashcardDeckTitle";
import { STUDENTPROFILE_TITLE_FIELD } from "../studentProfile/StudentProfileTitle";

export const FlashcardSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FlashcardSessionEntry"
          target="flashcardSessionId"
          label="FlashcardSessionEntries"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="bookmarked" source="bookmarked" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="flashcard"
              source="flashcard.id"
              reference="Flashcard"
            >
              <TextField source={FLASHCARD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="flashcardSession"
              source="flashcardsession.id"
              reference="FlashcardSession"
            >
              <TextField source={FLASHCARDSESSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="microbitsMarked" source="microbitsMarked" />
            <TextField label="rating" source="rating" />
            <TextField label="timeSpent" source="timeSpent" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
