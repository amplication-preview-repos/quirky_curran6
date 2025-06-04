import { CategoryTag as TCategoryTag } from "../api/categoryTag/CategoryTag";

export const CATEGORYTAG_TITLE_FIELD = "name";

export const CategoryTagTitle = (record: TCategoryTag): string => {
  return record.name?.toString() || String(record.id);
};
