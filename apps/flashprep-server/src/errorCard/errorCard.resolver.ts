import * as graphql from "@nestjs/graphql";
import { ErrorCardResolverBase } from "./base/errorCard.resolver.base";
import { ErrorCard } from "./base/ErrorCard";
import { ErrorCardService } from "./errorCard.service";

@graphql.Resolver(() => ErrorCard)
export class ErrorCardResolver extends ErrorCardResolverBase {
  constructor(protected readonly service: ErrorCardService) {
    super(service);
  }
}
