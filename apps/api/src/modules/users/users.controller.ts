import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from '#/shared/pipes/zodValidationPipe';
import { CreateUserDto, createUserSchema } from './dto/create';

@Controller('users')
export class UsersController {
  @UsePipes(new ZodValidationPipe(createUserSchema))
  @Post('create')
  create(@Body() body: CreateUserDto) {
    console.log(body);
  }

  @Get('getAll')
  getAll() {
    return 'Get all users';
  }
}
