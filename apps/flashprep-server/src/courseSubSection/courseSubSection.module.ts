import { Module } from "@nestjs/common";
import { CourseSubSectionModuleBase } from "./base/courseSubSection.module.base";
import { CourseSubSectionService } from "./courseSubSection.service";
import { CourseSubSectionController } from "./courseSubSection.controller";
import { CourseSubSectionResolver } from "./courseSubSection.resolver";

@Module({
  imports: [CourseSubSectionModuleBase],
  controllers: [CourseSubSectionController],
  providers: [CourseSubSectionService, CourseSubSectionResolver],
  exports: [CourseSubSectionService],
})
export class CourseSubSectionModule {}
