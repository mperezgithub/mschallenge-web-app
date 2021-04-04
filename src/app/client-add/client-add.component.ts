import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'add-clients',
  templateUrl:'./client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  client = {
    nombre: '',
    apellido: '',
    edad: '',
    fechaNacimiento:''
  };

  submitted = false;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  saveCliente(): void {
    const data = {
      nombre: this.client.nombre,
      apellido: this.client.apellido,
      edad: this.client.edad,
      fechaNacimiento: this.client.fechaNacimiento
    };

    this.clientService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newClient(): void {
    this.submitted = false;
    this.client = {
        nombre: '',
        apellido: '',
        edad: '',
        fechaNacimiento:''
    };
  }
}