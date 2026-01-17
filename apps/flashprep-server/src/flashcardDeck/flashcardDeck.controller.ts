import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlashcardDeckService } from "./flashcardDeck.service";
import { FlashcardDeckControllerBase } from "./base/flashcardDeck.controller.base";

@swagger.ApiTags("flashcardDecks")
@common.Controller("flashcardDecks")
export class FlashcardDeckController extends FlashcardDeckControllerBase {
  constructor(protected readonly service: FlashcardDeckService) {
    super(service);
  }
}
