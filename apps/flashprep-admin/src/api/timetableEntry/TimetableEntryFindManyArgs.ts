import { TimetableEntryWhereInput } from "./TimetableEntryWhereInput";
import { TimetableEntryOrderByInput } from "./TimetableEntryOrderByInput";

export type TimetableEntryFindManyArgs = {
  where?: TimetableEntryWhereInput;
  orderBy?: Array<TimetableEntryOrderByInput>;
  skip?: number;
  take?: number;
};
