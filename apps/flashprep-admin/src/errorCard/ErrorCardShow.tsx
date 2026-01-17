import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { FLASHCARD_TITLE_FIELD } from "../flashcard/FlashcardTitle";
import { FLASHCARDDECK_TITLE_FIELD } from "../flashcardDeck/FlashcardDeckTitle";
import { STUDENTPROFILE_TITLE_FIELD } from "../studentProfile/StudentProfileTitle";

export const ErrorCardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
