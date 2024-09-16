import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ZodValidationPipe } from '#/shared/pipes/zodValidationPipe';
import { CreateUserBody, createUserBodySchema } from './dto/createBody';
import { UsersService } from './users.service';
import { GetAllUsersQuery, getAllUsersQuerySchema } from './dto/getAllQuery';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  create(
    @Body(new ZodValidationPipe(createUserBodySchema)) body: CreateUserBody,
  ) {
    return this.usersService.create(body);
  }

  @Get()
  getAll(
    @Query(new ZodValidationPipe(getAllUsersQuerySchema))
    query: GetAllUsersQuery,
  ) {
    return this.usersService.getAll({
      skip: query.limit * (query.page - 1),
      take: query.limit,
    });
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return { userId: id };
  }
}
