import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {
  id: number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerEmpleadoPorId(this.id);
  }

  obtenerEmpleadoPorId(id: number) {
    this.empleadoServicio.obtenerEmpleadoPorId(id).subscribe((dato: any) => {
      if (dato) {
        this.empleado = {
          id: dato.id,
          nombre: dato.nombre,
          apellido: dato.apellido,
          email: dato.email
        };
      }
    });
  }
}
