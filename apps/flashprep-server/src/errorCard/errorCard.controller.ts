import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ErrorCardService } from "./errorCard.service";
import { ErrorCardControllerBase } from "./base/errorCard.controller.base";

@swagger.ApiTags("errorCards")
@common.Controller("errorCards")
export class ErrorCardController extends ErrorCardControllerBase {
  constructor(protected readonly service: ErrorCardService) {
    super(service);
  }
}
