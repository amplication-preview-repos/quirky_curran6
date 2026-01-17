import { StudentProfileWhereInput } from "./StudentProfileWhereInput";
import { StudentProfileOrderByInput } from "./StudentProfileOrderByInput";

export type StudentProfileFindManyArgs = {
  where?: StudentProfileWhereInput;
  orderBy?: Array<StudentProfileOrderByInput>;
  skip?: number;
  take?: number;
};
