import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentProfileService } from "./studentProfile.service";
import { StudentProfileControllerBase } from "./base/studentProfile.controller.base";

@swagger.ApiTags("studentProfiles")
@common.Controller("studentProfiles")
export class StudentProfileController extends StudentProfileControllerBase {
  constructor(protected readonly service: StudentProfileService) {
    super(service);
  }
}
