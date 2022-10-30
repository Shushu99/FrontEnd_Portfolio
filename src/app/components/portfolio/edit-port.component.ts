import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/model/portfolio';
import { ImagenService } from 'src/app/service/imagen.service';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-edit-port',
  templateUrl: './edit-port.component.html',
  styleUrls: ['./edit-port.component.css']
})
export class EditPortComponent implements OnInit {
  portfolio: Portfolio = null;

  constructor(private portfolioS: PortfolioService, private activatedRouter: ActivatedRoute, private router: Router, public imagenServiceP: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolioS.detail(id).subscribe(
      data => {
        this.portfolio = data;
      }, err =>{
        alert("Proceso Fallido");
        this.router.navigate(['']);
      }
    )

    this.imagenServiceP.clearUrl();
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.portfolio.imagen = this.imagenServiceP.url;
    this.portfolioS.update(id, this.portfolio).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Proceso Fallido");
        this.router.navigate(['']);
      }
    )
  }

  subirImagen($event:any){
    //const id = this.activatedRouter.snapshot.params['id'];
    const name = "trabajo_" + this.portfolio.nombre;
    this.imagenServiceP.subirImagen($event, name)
  }

}
 