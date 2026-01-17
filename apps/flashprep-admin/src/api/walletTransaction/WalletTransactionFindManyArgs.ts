import { WalletTransactionWhereInput } from "./WalletTransactionWhereInput";
import { WalletTransactionOrderByInput } from "./WalletTransactionOrderByInput";

export type WalletTransactionFindManyArgs = {
  where?: WalletTransactionWhereInput;
  orderBy?: Array<WalletTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
