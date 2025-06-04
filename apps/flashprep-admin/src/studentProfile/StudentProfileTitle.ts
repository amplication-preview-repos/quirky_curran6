import { StudentProfile as TStudentProfile } from "../api/studentProfile/StudentProfile";

export const STUDENTPROFILE_TITLE_FIELD = "id";

export const StudentProfileTitle = (record: TStudentProfile): string => {
  return record.id?.toString() || String(record.id);
};
