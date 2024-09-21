import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Role } from './roles.entity';
import { UserJoinClass } from './users_classes.entity';
import { BaseModel } from './base';

@Entity('users')
export class User extends BaseModel {
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'integer' })
  role_id: number;

  @ManyToOne(() => Role, (r) => r.users)
  @JoinColumn({ referencedColumnName: 'id', name: 'role_id' })
  role: User;

  @OneToMany(() => UserJoinClass, (ujc) => ujc.user)
  @JoinColumn({ referencedColumnName: 'user_id', name: 'id' })
  users_classes: UserJoinClass[];
}
