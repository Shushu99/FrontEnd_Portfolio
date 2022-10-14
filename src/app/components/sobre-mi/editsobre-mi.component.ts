import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editsobre-mi',
  templateUrl: './editsobre-mi.component.html',
  styleUrls: ['./editsobre-mi.component.css']
})
export class EditsobreMiComponent implements OnInit {
  Persona: persona = null;

  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data => {
        this.Persona = data;
      }, err =>{
        alert("Error al editar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Persona.imagen = this.imagenService.url
    this.personaS.update(id, this.Persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar");
        this.router.navigate(['']);
      }
    )
  }

  subirImagen($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imagenService.subirImagen($event, name)
  }

}
