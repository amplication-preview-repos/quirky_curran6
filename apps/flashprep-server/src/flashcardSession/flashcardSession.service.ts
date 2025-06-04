import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlashcardSessionServiceBase } from "./base/flashcardSession.service.base";

@Injectable()
export class FlashcardSessionService extends FlashcardSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
