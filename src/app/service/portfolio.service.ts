import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from '../model/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  URL = "https://backgiuliana.herokuapp.com/portfolio/";

  constructor(private httpClient: HttpClient) { } 

  public lista(): Observable<Portfolio[]>{
    return this.httpClient.get<Portfolio[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Portfolio>{
    return this.httpClient.get<Portfolio>(this.URL + `detail/${id}`);
  }

  public save(portfolio: Portfolio): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', portfolio);
  }

  public update(id: number, portfolio: Portfolio): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, portfolio);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
