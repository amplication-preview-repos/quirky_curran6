import { SortOrder } from "../../util/SortOrder";

export type CategoryTagOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parent?: SortOrder;
  updatedAt?: SortOrder;
};
