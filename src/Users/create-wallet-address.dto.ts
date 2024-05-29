import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWalletAddressDto {
  @IsString()
  @IsNotEmpty()
  readonly address: string;
}
