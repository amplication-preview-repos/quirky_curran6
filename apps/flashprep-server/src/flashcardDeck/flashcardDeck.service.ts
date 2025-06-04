import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlashcardDeckServiceBase } from "./base/flashcardDeck.service.base";

@Injectable()
export class FlashcardDeckService extends FlashcardDeckServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
