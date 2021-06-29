import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GenerarTurnosComponent } from './generar-turnos/generar-turnos.component';
import { TableTurnosComponent } from './table-turnos/table-turnos.component';


@NgModule({
  declarations: [
    AppComponent,
    GenerarTurnosComponent,
    TableTurnosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
