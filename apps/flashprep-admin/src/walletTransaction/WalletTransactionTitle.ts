import { WalletTransaction as TWalletTransaction } from "../api/walletTransaction/WalletTransaction";

export const WALLETTRANSACTION_TITLE_FIELD = "id";

export const WalletTransactionTitle = (record: TWalletTransaction): string => {
  return record.id?.toString() || String(record.id);
};
