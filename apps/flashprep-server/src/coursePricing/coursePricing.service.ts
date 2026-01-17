import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CoursePricingServiceBase } from "./base/coursePricing.service.base";

@Injectable()
export class CoursePricingService extends CoursePricingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
