import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://localhost:44313/api/Turnos';

  constructor(
    private http: HttpClient
  ) { }

  //Get Turnos
  getTurnos() {
    return this.http.get<any>("https://localhost:44313/api/Turnos/GetTurnos");
  }

  // Crear Turnos
  crearTurnos(fechaInicio: string, fechaFin: string, idServicio: number) {
    // var paramBody = JSON.stringify({ FechaInicio: fechaInicio, FechaFin: fechaFin, IdServicio: idServicio });
    var paramBody = { FechaInicio: fechaInicio, FechaFin: fechaFin, IdServicio: idServicio };

    return this.http.post<any>(this.baseUrl + '/GenerateTurns', paramBody);
  }
}