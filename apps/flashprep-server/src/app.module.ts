import { Module } from "@nestjs/common";
import { WalletTransactionModule } from "./walletTransaction/walletTransaction.module";
import { CoursePricingModule } from "./coursePricing/coursePricing.module";
import { StudentProfileModule } from "./studentProfile/studentProfile.module";
import { CourseModule } from "./course/course.module";
import { FlashcardModule } from "./flashcard/flashcard.module";
import { MicrobitModule } from "./microbit/microbit.module";
import { CategoryTagModule } from "./categoryTag/categoryTag.module";
import { EnrollmentModule } from "./enrollment/enrollment.module";
import { TimetableModule } from "./timetable/timetable.module";
import { TimetableEntryModule } from "./timetableEntry/timetableEntry.module";
import { AssetModule } from "./asset/asset.module";
import { FlashcardDeckModule } from "./flashcardDeck/flashcardDeck.module";
import { OrderModule } from "./order/order.module";
import { SavedContentModule } from "./savedContent/savedContent.module";
import { ReferralModule } from "./referral/referral.module";
import { ErrorCardModule } from "./errorCard/errorCard.module";
import { UserModule } from "./user/user.module";
import { FlashcardSessionEntryModule } from "./flashcardSessionEntry/flashcardSessionEntry.module";
import { FlashcardSessionModule } from "./flashcardSession/flashcardSession.module";
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
    WalletTransactionModule,
    CoursePricingModule,
    StudentProfileModule,
    CourseModule,
    FlashcardModule,
    MicrobitModule,
    CategoryTagModule,
    EnrollmentModule,
    TimetableModule,
    TimetableEntryModule,
    AssetModule,
    FlashcardDeckModule,
    OrderModule,
    SavedContentModule,
    ReferralModule,
    ErrorCardModule,
    UserModule,
    FlashcardSessionEntryModule,
    FlashcardSessionModule,
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
