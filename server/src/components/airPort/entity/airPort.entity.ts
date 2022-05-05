import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: "airPorts" })
export class AirPort {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({
    type: "string",
  })
  name: string;

  @Column({
    type: "string",
  })
  description: string;

  @Column({
    type: "string",
  })
  city: string;

  @Column({
    type: "string",
  })
  code: string;

  @Column({
    type: "date",
  })
  createdAt: any;

  @Column({
    type: "date",
  })
  updatedAt: any;
}
