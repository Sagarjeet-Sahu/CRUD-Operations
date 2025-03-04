import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) {}

  create(walletAddress: Partial<WalletAddress>): Promise<WalletAddress> {
    const newWalletAddress = this.walletAddressRepository.create(walletAddress);
    return this.walletAddressRepository.save(newWalletAddress);
  }

  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressRepository.find();
  }

  findOne(id: number): Promise<WalletAddress> {
    return this.walletAddressRepository.findOne(id);
  }

  async update(id: number, walletAddress: Partial<WalletAddress>): Promise<WalletAddress> {
    await this.walletAddressRepository.update(id, walletAddress);
    return this.walletAddressRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.walletAddressRepository.delete(id);
  }
}
