import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../user/user.entity';

@Entity('standards')
export class Standards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('json')
    params: any;

    @Column()
    hash: string;

    @ManyToOne(() => User, {
        eager: true,
        primary: true,
    })
    @JoinColumn({
        name: 'creator_id',
    })
    @Index()
    user: User;
}
