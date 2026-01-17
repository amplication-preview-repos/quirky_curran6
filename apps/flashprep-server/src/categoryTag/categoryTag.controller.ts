import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoryTagService } from "./categoryTag.service";
import { CategoryTagControllerBase } from "./base/categoryTag.controller.base";

@swagger.ApiTags("categoryTags")
@common.Controller("categoryTags")
export class CategoryTagController extends CategoryTagControllerBase {
  constructor(protected readonly service: CategoryTagService) {
    super(service);
  }
}
