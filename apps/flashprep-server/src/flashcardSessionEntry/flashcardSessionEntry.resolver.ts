import * as graphql from "@nestjs/graphql";
import { FlashcardSessionEntryResolverBase } from "./base/flashcardSessionEntry.resolver.base";
import { FlashcardSessionEntry } from "./base/FlashcardSessionEntry";
import { FlashcardSessionEntryService } from "./flashcardSessionEntry.service";

@graphql.Resolver(() => FlashcardSessionEntry)
export class FlashcardSessionEntryResolver extends FlashcardSessionEntryResolverBase {
  constructor(protected readonly service: FlashcardSessionEntryService) {
    super(service);
  }
}
