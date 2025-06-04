import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FLASHCARD_TITLE_FIELD } from "./FlashcardTitle";
import { FLASHCARDDECK_TITLE_FIELD } from "../flashcardDeck/FlashcardDeckTitle";
import { STUDENTPROFILE_TITLE_FIELD } from "../studentProfile/StudentProfileTitle";

export const FlashcardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ErrorCard"
          target="flashcardId"
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
          reference="Microbit"
          target="flashcardId"
          label="Microbits"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="feedback" source="feedback" />
            <ReferenceField
              label="Flashcard"
              source="flashcard.id"
              reference="Flashcard"
            >
              <TextField source={FLASHCARD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="forgetCount" source="forgetCount" />
            <TextField label="highlightedText" source="highlightedText" />
            <TextField label="ID" source="id" />
            <TextField label="reviewCount" source="reviewCount" />
            <TextField label="text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
