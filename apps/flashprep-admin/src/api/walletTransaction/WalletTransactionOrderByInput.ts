import { SortOrder } from "../../util/SortOrder";

export type WalletTransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
