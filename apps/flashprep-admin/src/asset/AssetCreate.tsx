import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { CourseSubSectionTitle } from "../courseSubSection/CourseSubSectionTitle";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="courseSubSection.id"
          reference="CourseSubSection"
          label="CourseSubSection"
        >
          <SelectInput optionText={CourseSubSectionTitle} />
        </ReferenceInput>
        <BooleanInput label="isSample" source="isSample" />
      </SimpleForm>
    </Create>
  );
};
