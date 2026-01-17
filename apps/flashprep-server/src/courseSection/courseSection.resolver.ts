import * as graphql from "@nestjs/graphql";
import { CourseSectionResolverBase } from "./base/courseSection.resolver.base";
import { CourseSection } from "./base/CourseSection";
import { CourseSectionService } from "./courseSection.service";

@graphql.Resolver(() => CourseSection)
export class CourseSectionResolver extends CourseSectionResolverBase {
  constructor(protected readonly service: CourseSectionService) {
    super(service);
  }
}
