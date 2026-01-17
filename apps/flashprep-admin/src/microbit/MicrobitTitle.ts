import { Microbit as TMicrobit } from "../api/microbit/Microbit";

export const MICROBIT_TITLE_FIELD = "feedback";

export const MicrobitTitle = (record: TMicrobit): string => {
  return record.feedback?.toString() || String(record.id);
};
