import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('verification-parameters')
export class VerificationParameters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column('json')
  params: any;

  @ManyToOne(() => User, {
    eager: true,
    primary: true,
  })
  @Index()
  user: User;
}
