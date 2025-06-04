import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MicrobitServiceBase } from "./base/microbit.service.base";

@Injectable()
export class MicrobitService extends MicrobitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
