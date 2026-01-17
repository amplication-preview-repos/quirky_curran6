import { Module } from "@nestjs/common";
import { TimetableEntryModuleBase } from "./base/timetableEntry.module.base";
import { TimetableEntryService } from "./timetableEntry.service";
import { TimetableEntryController } from "./timetableEntry.controller";
import { TimetableEntryResolver } from "./timetableEntry.resolver";

@Module({
  imports: [TimetableEntryModuleBase],
  controllers: [TimetableEntryController],
  providers: [TimetableEntryService, TimetableEntryResolver],
  exports: [TimetableEntryService],
})
export class TimetableEntryModule {}
