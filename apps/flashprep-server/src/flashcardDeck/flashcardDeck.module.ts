import { Module } from "@nestjs/common";
import { FlashcardDeckModuleBase } from "./base/flashcardDeck.module.base";
import { FlashcardDeckService } from "./flashcardDeck.service";
import { FlashcardDeckController } from "./flashcardDeck.controller";
import { FlashcardDeckResolver } from "./flashcardDeck.resolver";

@Module({
  imports: [FlashcardDeckModuleBase],
  controllers: [FlashcardDeckController],
  providers: [FlashcardDeckService, FlashcardDeckResolver],
  exports: [FlashcardDeckService],
})
export class FlashcardDeckModule {}
