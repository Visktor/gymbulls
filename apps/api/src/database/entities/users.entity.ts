import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './roles.entity';
import { UserJoinClass } from './users_classes.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'integer' })
  role_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Role, (r) => r.users)
  @JoinColumn({ referencedColumnName: 'role_id', name: 'id' })
  role: User;

  @OneToMany(() => UserJoinClass, (ujc) => ujc.user)
  @JoinColumn({ referencedColumnName: 'user_id', name: 'id' })
  users_classes: UserJoinClass[];
}
