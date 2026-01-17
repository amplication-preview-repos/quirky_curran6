import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourseSubSectionService } from "./courseSubSection.service";
import { CourseSubSectionControllerBase } from "./base/courseSubSection.controller.base";

@swagger.ApiTags("courseSubSections")
@common.Controller("courseSubSections")
export class CourseSubSectionController extends CourseSubSectionControllerBase {
  constructor(protected readonly service: CourseSubSectionService) {
    super(service);
  }
}
