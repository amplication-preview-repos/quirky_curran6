import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SavedContentService } from "./savedContent.service";
import { SavedContentControllerBase } from "./base/savedContent.controller.base";

@swagger.ApiTags("savedContents")
@common.Controller("savedContents")
export class SavedContentController extends SavedContentControllerBase {
  constructor(protected readonly service: SavedContentService) {
    super(service);
  }
}
