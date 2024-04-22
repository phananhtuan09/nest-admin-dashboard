import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from '~/common/entity/common.entity';

@Entity()
export class User extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
