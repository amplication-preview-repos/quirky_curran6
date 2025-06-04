import * as graphql from "@nestjs/graphql";
import { WalletTransactionResolverBase } from "./base/walletTransaction.resolver.base";
import { WalletTransaction } from "./base/WalletTransaction";
import { WalletTransactionService } from "./walletTransaction.service";

@graphql.Resolver(() => WalletTransaction)
export class WalletTransactionResolver extends WalletTransactionResolverBase {
  constructor(protected readonly service: WalletTransactionService) {
    super(service);
  }
}
