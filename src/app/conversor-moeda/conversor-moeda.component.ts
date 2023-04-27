import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-moeda',
  templateUrl: './conversor-moeda.component.html',
  styleUrls: ['./conversor-moeda.component.css']
})
export class ConversorMoedaComponent {

  reais : number = 0;
  dolar : number = 0;
  euro : number = 0;
  libra : number = 0;
  result: number[] = [];
  
  msgResultado : string = "";

  calcular(){
   this.result[1]=this.reais/this.dolar;
   this.result[2]=this.reais/this.euro;
   this.result[3]=this.reais/this.libra;
  }

}
