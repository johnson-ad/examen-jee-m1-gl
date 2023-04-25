import {  Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name : 'users'})
export class User {
  @PrimaryGeneratedColumn({type : 'bigint'})
  id: number;

  @Column({ unique : true})
  name: string;

  @Column('text')
  password: string;

  @Column()
  creatAt: Date

  @Column({nullable : true})
  authStrategy : string
}