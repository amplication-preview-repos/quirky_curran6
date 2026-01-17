import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { CourseSubSectionTitle } from "../courseSubSection/CourseSubSectionTitle";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
