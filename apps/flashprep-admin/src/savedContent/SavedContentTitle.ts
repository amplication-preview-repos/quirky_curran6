import { SavedContent as TSavedContent } from "../api/savedContent/SavedContent";

export const SAVEDCONTENT_TITLE_FIELD = "id";

export const SavedContentTitle = (record: TSavedContent): string => {
  return record.id?.toString() || String(record.id);
};
