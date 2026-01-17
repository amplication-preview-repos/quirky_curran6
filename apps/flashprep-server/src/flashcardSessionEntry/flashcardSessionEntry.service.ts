import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlashcardSessionEntryServiceBase } from "./base/flashcardSessionEntry.service.base";

@Injectable()
export class FlashcardSessionEntryService extends FlashcardSessionEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
