import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "text" })
  name: string;
  @Column({ type: "text" })
  email: string;
  @Column({ type: "text" })
  phone: string;
  @CreateDateColumn({ type: "timestamptz" })
  created_at: Date;
  @UpdateDateColumn({ type: "timestamptz" })
  updated_at: Date;
  @DeleteDateColumn({ type: "timestamptz" })
  deleted_at: Date;
}
