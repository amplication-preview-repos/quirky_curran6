import { MicrobitWhereInput } from "./MicrobitWhereInput";
import { MicrobitOrderByInput } from "./MicrobitOrderByInput";

export type MicrobitFindManyArgs = {
  where?: MicrobitWhereInput;
  orderBy?: Array<MicrobitOrderByInput>;
  skip?: number;
  take?: number;
};
