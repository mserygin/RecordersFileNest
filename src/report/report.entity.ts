import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Standards } from '../standarts/standards.entity';

@Entity('report')
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'link_document' })
    linkDocument: string;

    @ManyToOne(() => User, {
        eager: true,
        primary: true,
    })
    @JoinColumn({
        name: 'student_id',
    })
    @Index()
    user: User;

    @ManyToOne(() => Standards, {
        eager: true,
        primary: true,
    })
    @JoinColumn({
        name: 'standard_id',
    })
    @Index()
    standard: Standards;
}
