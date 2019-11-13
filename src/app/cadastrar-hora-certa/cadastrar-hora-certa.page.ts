import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-hora-certa',
  templateUrl: './cadastrar-hora-certa.page.html',
  styleUrls: ['./cadastrar-hora-certa.page.scss'],
})
export class CadastrarHoraCertaPage implements OnInit {

  formCadastrarHoraCerta = new FormGroup({
    data: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    falarTexto: new FormControl('', Validators.required),
    cor: new FormControl('', Validators.required)
  });

  constructor(private storage: Storage) { }

  ngOnInit() {
  }
  
  cadastrarHoraCerta() {
    let form = this.formCadastrarHoraCerta.value;
    form.status = 0;
    let listaHoraCerta = [form];

    this.storage.get('listaHoraCerta').then((value: any) => {
      if (value !== null || value !== undefined){
        let objeto = JSON.parse(value);
        listaHoraCerta = listaHoraCerta.concat(objeto);
      }
      this.storage.set('listaHoraCerta', JSON.stringify(listaHoraCerta));
    });
  }
}
