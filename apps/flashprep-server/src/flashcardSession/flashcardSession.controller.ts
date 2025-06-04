import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlashcardSessionService } from "./flashcardSession.service";
import { FlashcardSessionControllerBase } from "./base/flashcardSession.controller.base";

@swagger.ApiTags("flashcardSessions")
@common.Controller("flashcardSessions")
export class FlashcardSessionController extends FlashcardSessionControllerBase {
  constructor(protected readonly service: FlashcardSessionService) {
    super(service);
  }
}
