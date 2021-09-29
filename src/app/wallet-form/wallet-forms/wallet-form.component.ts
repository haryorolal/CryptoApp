import { Component, OnInit } from '@angular/core';
import { WalletFormService } from '../wallet-form.service';
import { Iwallet } from '../wallet.model';

@Component({
  selector: 'app-sent-form',
  templateUrl: './wallet-form.component.html',
  styleUrls: ['./wallet-form.component.css']
})
export class WalletFormComponent implements OnInit {
  Thewallets : Iwallet
  constructor(private wallservice:WalletFormService) { }

  ngOnInit(): void {
  }

  getWallet(){
    //this.wallservice.getWallets().subscribe(data => {
      //console.log(data);
      //this.Thewallets = data as Iwallet
    //})
  }


Thewallet = ['Crypto Wallet', 'Trust Wallet', 'ETH Wallet', 'CashApp Wallet', 'Blockchain Wallet', 'Coinbase Wallet', 
'BNB Wallet', 'Dodge Wallet', 'SafePal', 'CEX IO Wallet', 'ElectonCash Wallet', 'Atomic Wallet', 'Electrum Wallet', 'Binance Wallet'  ]



Thewalle = [
  {
    wallet_id: 1,
    wallet_name: 'Crypto Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 2,
    wallet_name: 'Trust Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 3,
    wallet_name: 'ETH Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 4,
    wallet_name: 'CashApp Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 5,
    wallet_name: 'Blockchain Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 6,
    wallet_name: 'Coinbase Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 7,
    wallet_name: 'BNB Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 8,
    wallet_name: 'Dodge Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 9,
    wallet_name: 'SafePal',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 10,
    wallet_name: 'CEX IO Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 7,
    wallet_name: 'ElectonCash Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 8,
    wallet_name: 'Atomic Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 7,
    wallet_name: 'Electrum Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
  {
    wallet_id: 8,
    wallet_name: 'Binance Wallet',
    wallet_image: 'assets/crpto.jpg'
  },
]







}
