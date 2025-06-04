import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { FLASHCARD_TITLE_FIELD } from "../flashcard/FlashcardTitle";
import { FLASHCARDSESSION_TITLE_FIELD } from "../flashcardSession/FlashcardSessionTitle";

export const FlashcardSessionEntryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FlashcardSessionEntries"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
