import * as graphql from "@nestjs/graphql";
import { CategoryTagResolverBase } from "./base/categoryTag.resolver.base";
import { CategoryTag } from "./base/CategoryTag";
import { CategoryTagService } from "./categoryTag.service";

@graphql.Resolver(() => CategoryTag)
export class CategoryTagResolver extends CategoryTagResolverBase {
  constructor(protected readonly service: CategoryTagService) {
    super(service);
  }
}
