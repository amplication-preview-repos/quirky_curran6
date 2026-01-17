import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { FLASHCARDDECK_TITLE_FIELD } from "../flashcardDeck/FlashcardDeckTitle";
import { STUDENTPROFILE_TITLE_FIELD } from "../studentProfile/StudentProfileTitle";

export const FlashcardSessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FlashcardSessions"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
