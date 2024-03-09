import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert2';


@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class EmpleadoDetallesComponent implements OnInit {
  id: number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado
    this.obtenerEmpleadoPorId(this.id);
  }

  obtenerEmpleadoPorId(id: number) {
    this.empleadoServicio.obtenerEmpleadoPorId(id).subscribe((dato: any) => {
      if (dato) {
        this.empleado = dato;
      }
    });
  }
}
