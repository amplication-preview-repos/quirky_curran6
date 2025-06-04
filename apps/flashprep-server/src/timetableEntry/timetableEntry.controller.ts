import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimetableEntryService } from "./timetableEntry.service";
import { TimetableEntryControllerBase } from "./base/timetableEntry.controller.base";

@swagger.ApiTags("timetableEntries")
@common.Controller("timetableEntries")
export class TimetableEntryController extends TimetableEntryControllerBase {
  constructor(protected readonly service: TimetableEntryService) {
    super(service);
  }
}
