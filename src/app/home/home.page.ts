import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaHoraCerta = [];

  constructor(private navCtrl: NavController, private storage: Storage) {}
  
  ionViewWillEnter(){
    
    this.storage.get('listaHoraCerta').then((value: any) => {
      this.listaHoraCerta = JSON.parse(value);
    });
  }

  cadastrarHoraCerta() {
    //alert("chegou");
    this.navCtrl.navigateForward('/cadastrar-hora-certa');
  }

}
