import { ErrorCard as TErrorCard } from "../api/errorCard/ErrorCard";

export const ERRORCARD_TITLE_FIELD = "id";

export const ErrorCardTitle = (record: TErrorCard): string => {
  return record.id?.toString() || String(record.id);
};
