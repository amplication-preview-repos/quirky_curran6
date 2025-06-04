import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";

import { FLASHCARD_TITLE_FIELD } from "../flashcard/FlashcardTitle";
import { FLASHCARDSESSION_TITLE_FIELD } from "../flashcardSession/FlashcardSessionTitle";

export const FlashcardSessionEntryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
