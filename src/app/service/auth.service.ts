import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';
import { NuevoUser } from '../model/nuevo-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://backgiuliana.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUser: NuevoUser): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser);
  }
}
