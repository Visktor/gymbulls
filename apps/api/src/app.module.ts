import { Module, ValidationPipe } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { UsersModule } from './modules/users/users.module';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { validate } from 'config/env';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      validate: validate,
    }),
    AuthModule,
    UsersModule,
    DatabaseModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
  ],
})
export class AppModule {}
