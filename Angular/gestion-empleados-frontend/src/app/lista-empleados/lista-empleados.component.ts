import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { NgFor, NgForOf } from '@angular/common';
import { EmpleadoService } from '../empleado.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [NgForOf, HttpClientModule, NgFor, RouterLink],
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
})
export class ListaEmpleadosComponent implements OnInit{
  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe((dato) => {
      this.empleados = dato;
    });
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado', id]);
  }

  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados();
    })
  }

  verDetalles(id:number){
    this.router.navigate(['empleado-detalles',id])
  }

  obtenerEmpleadoPorId(id:number){
    this.empleadoServicio.obtenerEmpleadoPorId(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerEmpleadoPorId(id);
    }
    )
  }
}
