import { Module } from "@nestjs/common";
import { CourseSectionModuleBase } from "./base/courseSection.module.base";
import { CourseSectionService } from "./courseSection.service";
import { CourseSectionController } from "./courseSection.controller";
import { CourseSectionResolver } from "./courseSection.resolver";

@Module({
  imports: [CourseSectionModuleBase],
  controllers: [CourseSectionController],
  providers: [CourseSectionService, CourseSectionResolver],
  exports: [CourseSectionService],
})
export class CourseSectionModule {}
