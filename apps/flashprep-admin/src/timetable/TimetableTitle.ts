import { Timetable as TTimetable } from "../api/timetable/Timetable";

export const TIMETABLE_TITLE_FIELD = "id";

export const TimetableTitle = (record: TTimetable): string => {
  return record.id?.toString() || String(record.id);
};
