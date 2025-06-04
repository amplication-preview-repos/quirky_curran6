import * as graphql from "@nestjs/graphql";
import { TimetableEntryResolverBase } from "./base/timetableEntry.resolver.base";
import { TimetableEntry } from "./base/TimetableEntry";
import { TimetableEntryService } from "./timetableEntry.service";

@graphql.Resolver(() => TimetableEntry)
export class TimetableEntryResolver extends TimetableEntryResolverBase {
  constructor(protected readonly service: TimetableEntryService) {
    super(service);
  }
}
