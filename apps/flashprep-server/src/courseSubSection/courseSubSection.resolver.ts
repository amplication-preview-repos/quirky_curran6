import * as graphql from "@nestjs/graphql";
import { CourseSubSectionResolverBase } from "./base/courseSubSection.resolver.base";
import { CourseSubSection } from "./base/CourseSubSection";
import { CourseSubSectionService } from "./courseSubSection.service";

@graphql.Resolver(() => CourseSubSection)
export class CourseSubSectionResolver extends CourseSubSectionResolverBase {
  constructor(protected readonly service: CourseSubSectionService) {
    super(service);
  }
}
