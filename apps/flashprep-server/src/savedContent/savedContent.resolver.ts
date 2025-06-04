import * as graphql from "@nestjs/graphql";
import { SavedContentResolverBase } from "./base/savedContent.resolver.base";
import { SavedContent } from "./base/SavedContent";
import { SavedContentService } from "./savedContent.service";

@graphql.Resolver(() => SavedContent)
export class SavedContentResolver extends SavedContentResolverBase {
  constructor(protected readonly service: SavedContentService) {
    super(service);
  }
}
