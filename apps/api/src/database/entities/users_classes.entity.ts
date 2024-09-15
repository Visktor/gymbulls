import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { Class } from './classes.entity';
import { User } from './users.entity';

@Entity('users_classes')
export class UserJoinClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  class_id: number;

  @Column('integer')
  user_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Class, (c) => c.id)
  @JoinColumn({ name: 'class_id', referencedColumnName: 'id' })
  class: Class;

  @ManyToOne(() => User, (u) => u.id)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
