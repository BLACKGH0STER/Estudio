import { Component, NgModule, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe((dato) => {
      this.empleados = dato;
    });
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado', id]);
  }

  eliminarEmpleado(id: number) {
    swal({
      title: "¿Estás seguro de querer eliminarlo?",
      text: "Confirma si deseas eliminar al empleado",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, elimínalo",
      cancelButtonText: "No, cancelar",
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          swal(
            "Empleado eliminado",
            "El empleado ha sido eliminado con éxito",
            "success"
          );
        });
      }
    });
  }

  verDetalles(id: number) {
    this.router.navigate(['empleado-detalles', id]);
  }

  obtenerEmpleadoPorId(id: number) {
    this.empleadoServicio.obtenerEmpleadoPorId(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleadoPorId(id);
    });
  }
}

@NgModule({
  declarations: [ListaEmpleadosComponent],
  imports: [CommonModule],
  exports: [ListaEmpleadosComponent]
})
export class EmpleadosModule {}
