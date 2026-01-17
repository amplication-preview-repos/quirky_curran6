import { CoursePricingWhereInput } from "./CoursePricingWhereInput";
import { CoursePricingOrderByInput } from "./CoursePricingOrderByInput";

export type CoursePricingFindManyArgs = {
  where?: CoursePricingWhereInput;
  orderBy?: Array<CoursePricingOrderByInput>;
  skip?: number;
  take?: number;
};
