import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CourseList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Courses"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="coverImages" source="coverImages" />
        <TextField label="coverVideo" source="coverVideo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="highlights" source="highlights" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="showEnrollmentStats"
          source="showEnrollmentStats"
        />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
