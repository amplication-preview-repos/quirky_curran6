import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ErrorCardServiceBase } from "./base/errorCard.service.base";

@Injectable()
export class ErrorCardService extends ErrorCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
