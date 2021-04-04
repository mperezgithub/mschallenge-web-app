import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-stats',
  templateUrl: './client-stats.component.html',
  styleUrls: ['./client-stats.component.css']
})
export class ClientStatsComponent implements OnInit {

  clients: any;
  average: any;
  stdv: any;

  headElements = ['','Nombre', 'Apellido', 'Edad', 'Fecha de Nacimiento', 'Fecha Estimada de Muerte'];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.retrieveClientStats();
  }

  retrieveClientStats(): void {
    this.clientService.getClientStats()
      .subscribe(
        data => {
          this.clients = data.datos;
          this.stdv = data.desviacionEstandard.toFixed(2);
          this.average = data.promedioEdad.toFixed(2);
          console.log("Data:" + data);
        },
        error => {
          console.log(error);
        });
  }
}