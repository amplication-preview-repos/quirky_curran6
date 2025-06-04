import { Module } from "@nestjs/common";
import { SavedContentModuleBase } from "./base/savedContent.module.base";
import { SavedContentService } from "./savedContent.service";
import { SavedContentController } from "./savedContent.controller";
import { SavedContentResolver } from "./savedContent.resolver";

@Module({
  imports: [SavedContentModuleBase],
  controllers: [SavedContentController],
  providers: [SavedContentService, SavedContentResolver],
  exports: [SavedContentService],
})
export class SavedContentModule {}
