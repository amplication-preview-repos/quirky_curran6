import { Referral as TReferral } from "../api/referral/Referral";

export const REFERRAL_TITLE_FIELD = "id";

export const ReferralTitle = (record: TReferral): string => {
  return record.id?.toString() || String(record.id);
};
