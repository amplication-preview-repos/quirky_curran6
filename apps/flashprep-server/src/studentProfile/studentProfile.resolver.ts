import * as graphql from "@nestjs/graphql";
import { StudentProfileResolverBase } from "./base/studentProfile.resolver.base";
import { StudentProfile } from "./base/StudentProfile";
import { StudentProfileService } from "./studentProfile.service";

@graphql.Resolver(() => StudentProfile)
export class StudentProfileResolver extends StudentProfileResolverBase {
  constructor(protected readonly service: StudentProfileService) {
    super(service);
  }
}
