import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';

@Controller('wallet-addresses')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Post()
  create(@Body() walletAddress: Partial<WalletAddress>): Promise<WalletAddress> {
    return this.walletAddressService.create(walletAddress);
  }

  @Get()
  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<WalletAddress> {
    return this.walletAddressService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() walletAddress: Partial<WalletAddress>): Promise<WalletAddress> {
    return this.walletAddressService.update(id, walletAddress);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.walletAddressService.remove(id);
  }
}
