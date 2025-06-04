import { SavedContentWhereInput } from "./SavedContentWhereInput";
import { SavedContentOrderByInput } from "./SavedContentOrderByInput";

export type SavedContentFindManyArgs = {
  where?: SavedContentWhereInput;
  orderBy?: Array<SavedContentOrderByInput>;
  skip?: number;
  take?: number;
};
