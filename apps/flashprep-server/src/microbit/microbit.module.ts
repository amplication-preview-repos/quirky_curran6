import { Module } from "@nestjs/common";
import { MicrobitModuleBase } from "./base/microbit.module.base";
import { MicrobitService } from "./microbit.service";
import { MicrobitController } from "./microbit.controller";
import { MicrobitResolver } from "./microbit.resolver";

@Module({
  imports: [MicrobitModuleBase],
  controllers: [MicrobitController],
  providers: [MicrobitService, MicrobitResolver],
  exports: [MicrobitService],
})
export class MicrobitModule {}
