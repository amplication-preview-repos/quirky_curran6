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

export const MicrobitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
