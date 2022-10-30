import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/model/portfolio';
import { ImagenService } from 'src/app/service/imagen.service';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-nuevo-port',
  templateUrl: './nuevo-port.component.html',
  styleUrls: ['./nuevo-port.component.css']
})
export class NuevoPortComponent implements OnInit {
  nombre: string;
  descripcion: string;
  imagen: string;

  constructor(private portfolioS: PortfolioService,private activatedRouter: ActivatedRoute, private router: Router, public imagenServiceP: ImagenService) { }

  ngOnInit(): void {
    this.imagenServiceP.clearUrl();
  }

  onCreate(): void{
    const portfolio = new Portfolio(this.nombre, this.descripcion, this.imagen);
    this.imagen = this.imagenServiceP.url;
    this.portfolioS.save(portfolio).subscribe(
      data =>{
        alert("Trabajo Agregado");
        this.router.navigate(['']);
      }, err =>{
      alert("Proceso Fallido");
      this.router.navigate(['']);
      }
    ) 
  }

  subirImagen($event:any){
    //const id = this.activatedRouter.snapshot.params['id'];
    const name = "trabajo_" + this.nombre;
    this.imagenServiceP.subirImagen($event, name)
  }

}
 