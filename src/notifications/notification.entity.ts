import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) // ← ahora puede ser null
  userId: number;

  @Column()
  message: string;

  @Column()
  type: string;

  @CreateDateColumn()
  createdAt: Date;
}
