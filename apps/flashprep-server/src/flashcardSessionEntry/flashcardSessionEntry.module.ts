import { Module } from "@nestjs/common";
import { FlashcardSessionEntryModuleBase } from "./base/flashcardSessionEntry.module.base";
import { FlashcardSessionEntryService } from "./flashcardSessionEntry.service";
import { FlashcardSessionEntryController } from "./flashcardSessionEntry.controller";
import { FlashcardSessionEntryResolver } from "./flashcardSessionEntry.resolver";

@Module({
  imports: [FlashcardSessionEntryModuleBase],
  controllers: [FlashcardSessionEntryController],
  providers: [FlashcardSessionEntryService, FlashcardSessionEntryResolver],
  exports: [FlashcardSessionEntryService],
})
export class FlashcardSessionEntryModule {}
