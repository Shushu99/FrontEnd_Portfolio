import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ApLogosComponent } from './components/ap-logos/ap-logos.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HysSkillsComponent } from './components/hys-skills/hys-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NuevaExpeComponent } from './components/experiencia/nueva-expe.component';
import { EditExpeComponent } from './components/experiencia/edit-expe.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditEduComponent } from './components/educacion/edit-edu.component';
import { NuevaHabilidadComponent } from './components/hys-skills/nueva-habilidad.component';
import { EditHabilidadComponent } from './components/hys-skills/edit-habilidad.component';
import { EditbannerComponent } from './components/banner/editbanner.component';
import { EditsobreMiComponent } from './components/sobre-mi/editsobre-mi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NuevoPortComponent } from './components/portfolio/nuevo-port.component';
import { EditPortComponent } from './components/portfolio/edit-port.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApLogosComponent,
    SocialComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysSkillsComponent,
    HomeComponent,
    LoginComponent,
    PortfolioComponent,
    FooterComponent,
    NuevaExpeComponent,
    EditExpeComponent,
    NuevaEducacionComponent,
    EditEduComponent,
    NuevaHabilidadComponent,
    EditHabilidadComponent,
    EditbannerComponent,
    EditsobreMiComponent,
    NuevoPortComponent,
    EditPortComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
