import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COURSESUBSECTION_TITLE_FIELD } from "./CourseSubSectionTitle";
import { COURSE_TITLE_FIELD } from "../course/CourseTitle";
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
        <ReferenceManyField
          reference="Asset"
          target="courseSubSectionId"
          label="Assets"
        >
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FlashcardDeck"
          target="courseSubSectionId"
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
