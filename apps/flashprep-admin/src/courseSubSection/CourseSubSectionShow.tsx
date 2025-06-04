import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { COURSESECTION_TITLE_FIELD } from "../courseSection/CourseSectionTitle";

export const CourseSubSectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
