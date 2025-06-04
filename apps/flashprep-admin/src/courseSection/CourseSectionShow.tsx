import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { COURSESECTION_TITLE_FIELD } from "./CourseSectionTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";

export const CourseSectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Course" source="course.id" reference="Course">
          <TextField source={COURSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="icon" source="icon" />
        <TextField label="ID" source="id" />
        <TextField label="order" source="order" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CourseSubSection"
          target="courseSectionId"
          label="CourseSubSections"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
