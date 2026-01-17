import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryTagWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  parent?: StringNullableFilter;
};
