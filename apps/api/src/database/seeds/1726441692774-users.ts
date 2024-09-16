import { MigrationInterface } from 'typeorm';
import seedDataSource from '../config/seed';
import { User } from '../entities/users.entity';

export class Users1726441692774 implements MigrationInterface {
  public async up(): Promise<void> {
    seedDataSource.getRepository(User).insert([
      {
        name: 'John Doe',
        email: 'admin@test.com',
        password:
          '$2a$12$e35ChgPCOcO66Zaaff4hNe1EQSz9VO4bf6/RrGi/tf1Yj3bOWZfzO',
        created_by: 1,
        role_id: 1,
      },
    ]);
  }

  public async down(): Promise<void> {}
}
