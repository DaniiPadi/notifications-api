import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    message: string;
    @Column()
    type: string;
    @CreateDateColumn()
    created_at: Date;
}