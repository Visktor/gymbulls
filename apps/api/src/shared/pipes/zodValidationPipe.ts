import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    const validationResult = this.schema.safeParse(value);

    if (validationResult.success) {
      return validationResult.data;
    }

    throw new BadRequestException(validationResult.error.format());
  }
}
