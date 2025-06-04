import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MicrobitService } from "./microbit.service";
import { MicrobitControllerBase } from "./base/microbit.controller.base";

@swagger.ApiTags("microbits")
@common.Controller("microbits")
export class MicrobitController extends MicrobitControllerBase {
  constructor(protected readonly service: MicrobitService) {
    super(service);
  }
}
