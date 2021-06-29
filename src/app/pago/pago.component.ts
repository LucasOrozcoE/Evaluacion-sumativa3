import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  


  constructor(private router: Router){

  }
  ngOnInit(){
  }
 
  envio(){
    alert("Datos rellenados, proximamente se realizará el envío de su pedido. Gracias por comprar en Kirby Gaming!!");
    console.log("prueba")
    return;
  }


  
}
