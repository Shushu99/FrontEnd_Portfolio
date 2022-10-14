import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private habilidadS: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidad = new Habilidades(this.nombre, this.porcentaje);
    this.habilidadS.save(habilidad).subscribe(
      data =>{
        alert("Habilidad Agregada");
        this.router.navigate(['']);
      }, err =>{
      alert("Hubo un error al agregar la habilidad");
      this.router.navigate(['']);
      }
    ) 
  }

}
 