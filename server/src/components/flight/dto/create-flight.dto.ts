import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFlightDto {
  @IsNotEmpty()
  @IsString()
  from: string;

  @IsNotEmpty()
  @IsString()
  to: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
