import { ErrorCardListRelationFilter } from "../errorCard/ErrorCardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentProfileWhereInput = {
  errorCards?: ErrorCardListRelationFilter;
  id?: StringFilter;
};
