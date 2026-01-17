import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WalletTransactionService } from "./walletTransaction.service";
import { WalletTransactionControllerBase } from "./base/walletTransaction.controller.base";

@swagger.ApiTags("walletTransactions")
@common.Controller("walletTransactions")
export class WalletTransactionController extends WalletTransactionControllerBase {
  constructor(protected readonly service: WalletTransactionService) {
    super(service);
  }
}
