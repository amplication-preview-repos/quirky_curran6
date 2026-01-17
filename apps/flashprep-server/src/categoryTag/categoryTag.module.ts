import { Module } from "@nestjs/common";
import { CategoryTagModuleBase } from "./base/categoryTag.module.base";
import { CategoryTagService } from "./categoryTag.service";
import { CategoryTagController } from "./categoryTag.controller";
import { CategoryTagResolver } from "./categoryTag.resolver";

@Module({
  imports: [CategoryTagModuleBase],
  controllers: [CategoryTagController],
  providers: [CategoryTagService, CategoryTagResolver],
  exports: [CategoryTagService],
})
export class CategoryTagModule {}
