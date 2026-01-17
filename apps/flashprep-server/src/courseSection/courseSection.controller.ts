import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourseSectionService } from "./courseSection.service";
import { CourseSectionControllerBase } from "./base/courseSection.controller.base";

@swagger.ApiTags("courseSections")
@common.Controller("courseSections")
export class CourseSectionController extends CourseSectionControllerBase {
  constructor(protected readonly service: CourseSectionService) {
    super(service);
  }
}
