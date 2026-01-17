import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WalletTransactionServiceBase } from "./base/walletTransaction.service.base";

@Injectable()
export class WalletTransactionService extends WalletTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
