import { Module } from "@nestjs/common";
import { CoursePricingModuleBase } from "./base/coursePricing.module.base";
import { CoursePricingService } from "./coursePricing.service";
import { CoursePricingController } from "./coursePricing.controller";
import { CoursePricingResolver } from "./coursePricing.resolver";

@Module({
  imports: [CoursePricingModuleBase],
  controllers: [CoursePricingController],
  providers: [CoursePricingService, CoursePricingResolver],
  exports: [CoursePricingService],
})
export class CoursePricingModule {}
