import * as graphql from "@nestjs/graphql";
import { CoursePricingResolverBase } from "./base/coursePricing.resolver.base";
import { CoursePricing } from "./base/CoursePricing";
import { CoursePricingService } from "./coursePricing.service";

@graphql.Resolver(() => CoursePricing)
export class CoursePricingResolver extends CoursePricingResolverBase {
  constructor(protected readonly service: CoursePricingService) {
    super(service);
  }
}
