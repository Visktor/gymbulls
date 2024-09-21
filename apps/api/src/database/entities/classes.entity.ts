import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';
import { UserJoinClass } from './users_classes.entity';
import { BaseModel } from './base';

@Entity('classes')
export class Class extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => UserJoinClass, (cr) => cr.class)
  @JoinColumn({ referencedColumnName: 'class_id', name: 'id' })
  users_classes: UserJoinClass[];
}
