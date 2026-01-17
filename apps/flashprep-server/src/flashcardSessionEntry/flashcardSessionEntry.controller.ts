import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlashcardSessionEntryService } from "./flashcardSessionEntry.service";
import { FlashcardSessionEntryControllerBase } from "./base/flashcardSessionEntry.controller.base";

@swagger.ApiTags("flashcardSessionEntries")
@common.Controller("flashcardSessionEntries")
export class FlashcardSessionEntryController extends FlashcardSessionEntryControllerBase {
  constructor(protected readonly service: FlashcardSessionEntryService) {
    super(service);
  }
}
