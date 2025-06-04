import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourseSectionServiceBase } from "./base/courseSection.service.base";

@Injectable()
export class CourseSectionService extends CourseSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
