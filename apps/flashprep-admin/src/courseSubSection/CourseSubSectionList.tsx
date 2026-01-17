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
import { COURSESECTION_TITLE_FIELD } from "../courseSection/CourseSectionTitle";

export const CourseSubSectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"CourseSubSections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="CourseSection"
          source="coursesection.id"
          reference="CourseSection"
        >
          <TextField source={COURSESECTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="icon" source="icon" />
        <TextField label="ID" source="id" />
        <BooleanField label="isLocked" source="isLocked" />
        <BooleanField label="isSample" source="isSample" />
        <TextField label="order" source="order" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
