import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css',
  providers: [EmpleadoService]
})
export class RegistrarEmpleadoComponent {
  empleado : Empleado = new Empleado();
  constructor(private empleadoServicio: EmpleadoService, private router:Router){

  }
  ngOnInit(): void{
    
  }
  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, error=> console.log(error));
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados'])
  }

  onSubmit(){
    this.guardarEmpleado();
  }
}
