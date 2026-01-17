import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourseSubSectionServiceBase } from "./base/courseSubSection.service.base";

@Injectable()
export class CourseSubSectionService extends CourseSubSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
