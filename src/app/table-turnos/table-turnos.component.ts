import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-turnos',
  templateUrl: './table-turnos.component.html',
  styleUrls: ['./table-turnos.component.css']
})
export class TableTurnosComponent implements OnInit {
  @Input() titulos: string[] | undefined;
  @Input() filas: any;

  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
  }

}
