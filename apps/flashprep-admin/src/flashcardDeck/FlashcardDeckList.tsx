import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
import { COURSESUBSECTION_TITLE_FIELD } from "../courseSubSection/CourseSubSectionTitle";

export const FlashcardDeckList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"FlashcardDecks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="CourseSubSection"
          source="coursesubsection.id"
          reference="CourseSubSection"
        >
          <TextField source={COURSESUBSECTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isSample" source="isSample" />
        <TextField label="lastUpdated" source="lastUpdated" />
        <TextField label="tags" source="tags" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
