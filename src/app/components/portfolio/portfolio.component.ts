import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/model/portfolio';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[] = [];
  constructor(private portfolioS: PortfolioService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPortfolio();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPortfolio(): void{
    this.portfolioS.lista().subscribe(data =>{
      this.portfolio = data;
    }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.portfolioS.delete(id).subscribe(
        data => {
          this.cargarPortfolio();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }

}
