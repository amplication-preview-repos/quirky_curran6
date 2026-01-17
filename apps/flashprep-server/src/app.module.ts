import { Module } from "@nestjs/common";
import { CourseModule } from "./course/course.module";
import { WalletTransactionModule } from "./walletTransaction/walletTransaction.module";
import { CoursePricingModule } from "./coursePricing/coursePricing.module";
import { StudentProfileModule } from "./studentProfile/studentProfile.module";
import { FlashcardModule } from "./flashcard/flashcard.module";
import { MicrobitModule } from "./microbit/microbit.module";
import { CategoryTagModule } from "./categoryTag/categoryTag.module";
import { AssetModule } from "./asset/asset.module";
import { FlashcardDeckModule } from "./flashcardDeck/flashcardDeck.module";
import { EnrollmentModule } from "./enrollment/enrollment.module";
import { TimetableModule } from "./timetable/timetable.module";
import { TimetableEntryModule } from "./timetableEntry/timetableEntry.module";
import { OrderModule } from "./order/order.module";
import { SavedContentModule } from "./savedContent/savedContent.module";
import { ReferralModule } from "./referral/referral.module";
import { ErrorCardModule } from "./errorCard/errorCard.module";
import { UserModule } from "./user/user.module";
import { FlashcardSessionEntryModule } from "./flashcardSessionEntry/flashcardSessionEntry.module";
import { FlashcardSessionModule } from "./flashcardSession/flashcardSession.module";
import { CourseSectionModule } from "./courseSection/courseSection.module";
import { CourseSubSectionModule } from "./courseSubSection/courseSubSection.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CourseModule,
    WalletTransactionModule,
    CoursePricingModule,
    StudentProfileModule,
    FlashcardModule,
    MicrobitModule,
    CategoryTagModule,
    AssetModule,
    FlashcardDeckModule,
    EnrollmentModule,
    TimetableModule,
    TimetableEntryModule,
    OrderModule,
    SavedContentModule,
    ReferralModule,
    ErrorCardModule,
    UserModule,
    FlashcardSessionEntryModule,
    FlashcardSessionModule,
    CourseSectionModule,
    CourseSubSectionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
