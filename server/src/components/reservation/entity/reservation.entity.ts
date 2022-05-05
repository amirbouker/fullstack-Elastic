import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({ name: "reservations" })
export class Reservation {
  @ObjectIdColumn()
  id: number;

  @Column({
    type: "string",
  })
  flightId: string;

  @Column({
    type: "string",
  })
  fullName: string;

  @Column({
    type: "string",
  })
  email: string;

  @Column({
    type: "date",
  })
  createdAt: any;

  @Column({
    type: "date",
  })
  updatedAt: any;
}
