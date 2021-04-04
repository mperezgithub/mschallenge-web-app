import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: any;
  headElements = ['','Nombre', 'Apellido', 'Edad', 'Fecha de Nacimiento', 'Fecha Estimada de Muerte'];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.retrieveClients();
  }

  retrieveClients(): void {
    this.clientService.getAll()
      .subscribe(
        data => {
          this.clients = data.datos;
          console.log("Data:" + data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveClients();
  }
}