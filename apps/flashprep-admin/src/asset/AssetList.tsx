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
import { COURSESUBSECTION_TITLE_FIELD } from "../courseSubSection/CourseSubSectionTitle";

export const AssetList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Assets"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="CourseSubSection"
          source="coursesubsection.id"
          reference="CourseSubSection"
        >
          <TextField source={COURSESUBSECTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isSample" source="isSample" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
