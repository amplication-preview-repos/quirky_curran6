import * as graphql from "@nestjs/graphql";
import { FlashcardSessionResolverBase } from "./base/flashcardSession.resolver.base";
import { FlashcardSession } from "./base/FlashcardSession";
import { FlashcardSessionService } from "./flashcardSession.service";

@graphql.Resolver(() => FlashcardSession)
export class FlashcardSessionResolver extends FlashcardSessionResolverBase {
  constructor(protected readonly service: FlashcardSessionService) {
    super(service);
  }
}
