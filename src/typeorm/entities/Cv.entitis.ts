import {  Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Cv {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    name: string;
  
    @Column('text')
    description: string;
  
    @Column()
    filename: string;
  
    @Column('text')
    experience: string;
  
    @Column()
    isPublished: boolean;
  
    @Column()
    creatAt: Date
  }