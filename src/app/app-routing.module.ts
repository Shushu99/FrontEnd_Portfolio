import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { EditbannerComponent } from './components/banner/editbanner.component';
import { EditEduComponent } from './components/educacion/edit-edu.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditExpeComponent } from './components/experiencia/edit-expe.component';
import { NuevaExpeComponent } from './components/experiencia/nueva-expe.component';
import { EditHabilidadComponent } from './components/hys-skills/edit-habilidad.component';
import { NuevaHabilidadComponent } from './components/hys-skills/nueva-habilidad.component';
import { EditPortComponent } from './components/portfolio/edit-port.component';
import { NuevoPortComponent } from './components/portfolio/nuevo-port.component';
import { EditsobreMiComponent } from './components/sobre-mi/editsobre-mi.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'nuevaexp', component: NuevaExpeComponent},
    {path: 'editexp/:id', component: EditExpeComponent},
    {path: 'nuevaedu', component: NuevaEducacionComponent},
    {path: 'editedu/:id', component: EditEduComponent},
    {path: 'nuevahabi', component: NuevaHabilidadComponent},
    {path: 'edithabi/:id', component: EditHabilidadComponent},   
    {path: 'editsobremi/:id', component: EditsobreMiComponent}, 
    {path: 'editbanner/:id', component: EditbannerComponent},
    {path: 'edittrabajo/:id', component: EditPortComponent},
    {path: 'nuevotrabajo', component: NuevoPortComponent}    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }