import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimetableEntryServiceBase } from "./base/timetableEntry.service.base";

@Injectable()
export class TimetableEntryService extends TimetableEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
