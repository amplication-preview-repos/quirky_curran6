import { Module } from "@nestjs/common";
import { ErrorCardModuleBase } from "./base/errorCard.module.base";
import { ErrorCardService } from "./errorCard.service";
import { ErrorCardController } from "./errorCard.controller";
import { ErrorCardResolver } from "./errorCard.resolver";

@Module({
  imports: [ErrorCardModuleBase],
  controllers: [ErrorCardController],
  providers: [ErrorCardService, ErrorCardResolver],
  exports: [ErrorCardService],
})
export class ErrorCardModule {}
