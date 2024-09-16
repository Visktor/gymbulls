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

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'integer' })
  role_id: number;

  @Column({ type: 'integer' })
  created_by: number;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'integer', nullable: true })
  updated_by: number;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Role, (r) => r.users)
  @JoinColumn({ referencedColumnName: 'id', name: 'role_id' })
  role: User;

  @OneToMany(() => UserJoinClass, (ujc) => ujc.user)
  @JoinColumn({ referencedColumnName: 'user_id', name: 'id' })
  users_classes: UserJoinClass[];
}
