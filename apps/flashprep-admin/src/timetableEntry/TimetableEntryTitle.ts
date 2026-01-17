import { TimetableEntry as TTimetableEntry } from "../api/timetableEntry/TimetableEntry";

export const TIMETABLEENTRY_TITLE_FIELD = "id";

export const TimetableEntryTitle = (record: TTimetableEntry): string => {
  return record.id?.toString() || String(record.id);
};
