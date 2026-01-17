import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COURSE_TITLE_FIELD } from "./CourseTitle";
import { COURSESUBSECTION_TITLE_FIELD } from "../courseSubSection/CourseSubSectionTitle";

export const CourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CourseSection"
          target="courseId"
          label="CourseSections"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
              <TextField source={COURSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="icon" source="icon" />
            <TextField label="ID" source="id" />
            <TextField label="order" source="order" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FlashcardDeck"
          target="courseId"
          label="FlashcardDecks"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Course"
              source="course.id"
              reference="Course"
            >
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
