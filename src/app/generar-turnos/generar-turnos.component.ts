import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-generar-turnos',
  templateUrl: './generar-turnos.component.html',
  styleUrls: ['./generar-turnos.component.css']
})
export class GenerarTurnosComponent implements OnInit {

  listaServicios = ['Revisión Técnico Mecánica - RTM', 'Alineación y Balanceo', 'Auto Lavado'];

  post : any = null;
  titulosColumnas = ['No.','Fecha', 'Hora Inicio', 'Hora Fin', 'Estado'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.consultarturnos();
  }

  generarTurnos(fechaInicio: string, fechaFin: string, Servicio: string){

    let idServicio = 0;

    switch(Servicio) { 
      case 'Revisión Técnico Mecánica - RTM': { 
        idServicio = 1; 
         break; 
      } 
      case 'Alineación y Balanceo': { 
        idServicio = 2; 
         break; 
      } 
      case 'Auto Lavado': { 
        idServicio = 3; 
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 

    this.dataService.crearTurnos(fechaInicio, fechaFin, idServicio)
       .subscribe(result => this.post = result)
  }

  consultarturnos(){
    this.dataService.getTurnos()
       .subscribe(result => this.post = result)
  }
}




