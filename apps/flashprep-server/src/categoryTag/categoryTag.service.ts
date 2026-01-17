import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoryTagServiceBase } from "./base/categoryTag.service.base";

@Injectable()
export class CategoryTagService extends CategoryTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
