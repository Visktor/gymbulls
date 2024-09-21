import { Column, Entity } from 'typeorm';
import { BaseModel } from './base';

@Entity('equipments')
export class Equipment extends BaseModel {
  @Column('date')
  bought_at: Date;

  @Column('integer')
  buyer_id: number;

  @Column('text')
  document_url: string;

  @Column('enum')
  equipment_type: number;
}
