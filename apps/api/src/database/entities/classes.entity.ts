import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { UserJoinClass } from './users_classes.entity';

@Entity('classes')
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('integer')
  created_by: number;

  @CreateDateColumn()
  created_at: Date;

  @Column('integer')
  updated_by: number;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => UserJoinClass, (cr) => cr.class)
  @JoinColumn({ referencedColumnName: 'class_id', name: 'id' })
  users_classes: UserJoinClass[];
}
