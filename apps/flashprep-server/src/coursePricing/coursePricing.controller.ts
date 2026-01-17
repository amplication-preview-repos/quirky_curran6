import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CoursePricingService } from "./coursePricing.service";
import { CoursePricingControllerBase } from "./base/coursePricing.controller.base";

@swagger.ApiTags("coursePricings")
@common.Controller("coursePricings")
export class CoursePricingController extends CoursePricingControllerBase {
  constructor(protected readonly service: CoursePricingService) {
    super(service);
  }
}
