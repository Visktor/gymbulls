import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { User } from './users.entity';
import { BaseModel } from './base';

@Entity('roles')
export class Role extends BaseModel {
  @Column('varchar')
  name: string;

  @OneToMany(() => User, (u) => u.role)
  @JoinColumn({ name: 'id', referencedColumnName: 'role_id' })
  users: User[];
}
