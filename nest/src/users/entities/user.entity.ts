import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { NewsEntity } from '../../news/entities/news.entity';
import { CommentsEntity } from '../../news/comments/entities/comments.entity';
import { IsEnum } from 'class-validator';
import { Role } from 'src/auth/role/role.enum';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  @IsEnum(Role)
  roles: Role;

  @Column('text')
  avatar: string;

  @OneToMany(() => NewsEntity, (news) => news.user)
  news: NewsEntity[];

  @OneToMany(() => CommentsEntity, (comments) => comments.user, {
    onDelete: 'CASCADE',
  })
  comments: CommentsEntity[];

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;
}