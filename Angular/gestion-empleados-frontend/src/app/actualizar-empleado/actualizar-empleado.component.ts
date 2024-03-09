import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar-empleado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css'
})
export class ActualizarEmpleadoComponent implements OnInit{
  empleado : Empleado = new Empleado();
  id: number;

  constructor(private empleadoServicio: EmpleadoService, private route: ActivatedRoute, private router : Router){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerEmpleadoPorId(this.id);
  }
  obtenerEmpleadoPorId(id: number) {
    this.empleadoServicio.obtenerEmpleadoPorId(id).subscribe((dato: any) => {
      if (dato) {
        this.empleado = dato;
      }
    });
  }
  actualizarEmpleado(){
    this.empleadoServicio.actualizarEmpleado(this.id, this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, error=> console.log(error));
  }
  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados'])
  }
  onSubmit(){
    this.actualizarEmpleado();
  }
}
