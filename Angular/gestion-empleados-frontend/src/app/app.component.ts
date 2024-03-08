import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { NgFor } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaEmpleadosComponent, HttpClientModule,NgFor, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestión de empleados';
}