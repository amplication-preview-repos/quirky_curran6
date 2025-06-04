import { CoursePricing as TCoursePricing } from "../api/coursePricing/CoursePricing";

export const COURSEPRICING_TITLE_FIELD = "id";

export const CoursePricingTitle = (record: TCoursePricing): string => {
  return record.id?.toString() || String(record.id);
};
