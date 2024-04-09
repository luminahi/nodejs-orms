import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn({ comment: "cool comment!" })
    id: number;

    @Column({ length: 16, nullable: true })
    make: string;

    @Column({ length: 16 })
    model: string;
}
