import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleado',
  standalone: true,
  imports: [],
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css'
})
export class ActualizarEmpleadoComponent implements OnInit{
  empleado : Empleado = new Empleado();
  constructor(private empleadoServicio: EmpleadoService, private router:Router){

  }
  ngOnInit(): void{
    
  }
  
}
