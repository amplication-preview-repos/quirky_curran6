import * as graphql from "@nestjs/graphql";
import { FlashcardDeckResolverBase } from "./base/flashcardDeck.resolver.base";
import { FlashcardDeck } from "./base/FlashcardDeck";
import { FlashcardDeckService } from "./flashcardDeck.service";

@graphql.Resolver(() => FlashcardDeck)
export class FlashcardDeckResolver extends FlashcardDeckResolverBase {
  constructor(protected readonly service: FlashcardDeckService) {
    super(service);
  }
}
