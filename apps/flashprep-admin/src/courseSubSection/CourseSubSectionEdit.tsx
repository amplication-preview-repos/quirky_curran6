import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { CourseSectionTitle } from "../courseSection/CourseSectionTitle";

export const CourseSubSectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="courseSection.id"
          reference="CourseSection"
          label="CourseSection"
        >
          <SelectInput optionText={CourseSectionTitle} />
        </ReferenceInput>
        <TextInput label="icon" source="icon" />
        <BooleanInput label="isLocked" source="isLocked" />
        <BooleanInput label="isSample" source="isSample" />
        <NumberInput step={1} label="order" source="order" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
