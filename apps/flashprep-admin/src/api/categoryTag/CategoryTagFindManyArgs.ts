import { CategoryTagWhereInput } from "./CategoryTagWhereInput";
import { CategoryTagOrderByInput } from "./CategoryTagOrderByInput";

export type CategoryTagFindManyArgs = {
  where?: CategoryTagWhereInput;
  orderBy?: Array<CategoryTagOrderByInput>;
  skip?: number;
  take?: number;
};
