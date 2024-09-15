import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthLoginDto, authLoginSchema } from './dto/login.dto';
import { ZodValidationPipe } from '#/shared/pipes/zodValidationPipe';

@Controller('auth')
export class AuthController {
  @UsePipes(new ZodValidationPipe(authLoginSchema))
  @Post('login')
  login(@Body() body: AuthLoginDto) {
    console.log(body);
  }
}
