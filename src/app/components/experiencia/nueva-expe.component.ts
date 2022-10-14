import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServiceExpeService } from 'src/app/service/service-expe.service';

@Component({
  selector: 'app-nueva-expe',
  templateUrl: './nueva-expe.component.html',
  styleUrls: ['./nueva-expe.component.css']
})
export class NuevaExpeComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private serviceExpe: ServiceExpeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.serviceExpe.save(expe).subscribe(
      data => {
        alert("Experiencia agregada"); 
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo agregar");
        this.router.navigate(['']);
      } )
  }

}
