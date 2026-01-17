import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FLASHCARD_TITLE_FIELD } from "../flashcard/FlashcardTitle";

export const MicrobitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Microbits"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
