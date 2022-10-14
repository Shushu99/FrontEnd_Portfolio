import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ServiceExpeService } from 'src/app/service/service-expe.service';

@Component({
  selector: 'app-edit-expe',
  templateUrl: './edit-expe.component.html',
  styleUrls: ['./edit-expe.component.css']
})
export class EditExpeComponent implements OnInit {
  expLab : Experiencia = null;

  constructor(private serviceExpe: ServiceExpeService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceExpe.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error en la modificación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.serviceExpe.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error en la modificación");
        this.router.navigate(['']);
      }

    )
  }

}
