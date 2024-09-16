import { MigrationInterface } from 'typeorm';
import seedDataSource from '../config/seed';
import { Role } from '../entities/roles.entity';

export class Roles1726441688457 implements MigrationInterface {
  public async up(): Promise<void> {
    seedDataSource.getRepository(Role).insert([
      {
        name: 'Admin',
        id: 1,
      },
    ]);
  }

  public async down(): Promise<void> {}
}
