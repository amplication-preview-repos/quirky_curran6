import { Module } from "@nestjs/common";
import { FlashcardSessionModuleBase } from "./base/flashcardSession.module.base";
import { FlashcardSessionService } from "./flashcardSession.service";
import { FlashcardSessionController } from "./flashcardSession.controller";
import { FlashcardSessionResolver } from "./flashcardSession.resolver";

@Module({
  imports: [FlashcardSessionModuleBase],
  controllers: [FlashcardSessionController],
  providers: [FlashcardSessionService, FlashcardSessionResolver],
  exports: [FlashcardSessionService],
})
export class FlashcardSessionModule {}
