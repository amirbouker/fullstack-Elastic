import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReservationDto {
  @IsNotEmpty()
  @IsString()
  flightId: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}
