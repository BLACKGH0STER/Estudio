import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private baseURL = "http://localhost:8081/api/v1/empleados";

  constructor(private httpClient: HttpClient) {}

  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.baseURL); 
  }

  registrarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.httpClient.post(this.baseURL, empleado);
  }

  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(this.baseURL+'/'+id,empleado);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(this.baseURL+'/'+id);
  }
  
  obtenerEmpleadoPorId(id:number):Observable<Object>{
    return this.httpClient.get<Empleado[]>(this.baseURL+'/'+id); 
  }
}