import * as graphql from "@nestjs/graphql";
import { MicrobitResolverBase } from "./base/microbit.resolver.base";
import { Microbit } from "./base/Microbit";
import { MicrobitService } from "./microbit.service";

@graphql.Resolver(() => Microbit)
export class MicrobitResolver extends MicrobitResolverBase {
  constructor(protected readonly service: MicrobitService) {
    super(service);
  }
}
