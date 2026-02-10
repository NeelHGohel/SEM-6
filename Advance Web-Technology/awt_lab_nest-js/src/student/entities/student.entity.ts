import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  StudentName: string;

  @Column()
  StudentEmail: string;

  @Column()
  StudentSPI: string;
}
