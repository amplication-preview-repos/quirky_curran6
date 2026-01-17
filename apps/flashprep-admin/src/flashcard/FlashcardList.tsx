import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FLASHCARDDECK_TITLE_FIELD } from "../flashcardDeck/FlashcardDeckTitle";

export const FlashcardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Flashcards"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
