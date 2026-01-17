import { Module } from "@nestjs/common";
import { WalletTransactionModuleBase } from "./base/walletTransaction.module.base";
import { WalletTransactionService } from "./walletTransaction.service";
import { WalletTransactionController } from "./walletTransaction.controller";
import { WalletTransactionResolver } from "./walletTransaction.resolver";

@Module({
  imports: [WalletTransactionModuleBase],
  controllers: [WalletTransactionController],
  providers: [WalletTransactionService, WalletTransactionResolver],
  exports: [WalletTransactionService],
})
export class WalletTransactionModule {}
