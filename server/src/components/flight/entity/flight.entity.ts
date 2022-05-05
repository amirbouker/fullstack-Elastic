import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({ name: "flights" })
export class Flight {
  @ObjectIdColumn()
  id: number;

  @Column({
    type: "string",
  })
  from: string;

  @Column({
    type: "string",
  })
  to: string;

  @Column({
    type: "string",
  })
  time: string;

  @Column({
    type: "float",
  })
  price: number;

  @Column({
    type: "date",
  })
  createdAt: any;

  @Column({
    type: "date",
  })
  updatedAt: any;
}
