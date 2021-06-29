import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TotalService } from '../total.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  template: `
    <app-pago [childMessage]="parentMessage"></app-pago>
  `,
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  totalDinero = 0;
  totalCarrito = 0;
  hola = ['hola','como'];
  clave = new FormControl('');
  cantidad = new FormControl();
  productosCarrito: any[] = []; // Array para el carrito
  productosCantidad = [{
                        codigo: 0,
                        cant: 0,
                      }
  ];
  productos: any[] = [];
  productosActual1 = [   // Array para items en stock
    {
      codigo: 1, nombre: 'Final fantasy 8', precio: 7990,
      descripcion: 'juego jrpg de rol', img: '../../assets/prod/img/ff8.jpg',
      tags : "final fantasy, retro, rpg"
    },
    {
      codigo: 2, nombre: 'Mario Bros', precio: 10990,
      descripcion: 'juego de plataformas', img: '../../assets/prod/img/mariobros.jpg',
      tags : "mario, retro, plataformas, aventura"
    },
    {
      codigo: 3, nombre: 'Pokemon rojo fuego', precio: 3900,
      descripcion: 'juego de captura de pokemones ', img: '../../assets/prod/img/rojofuego.png',
      tags : "pokemon, retro, aventura"
    },
    {
      codigo: 4, nombre: 'Gears of war 5', precio: 29990,
      descripcion: 'campaña de shooter', img: '../../assets/prod/img/gears5.jpg',
      tags : "gears, shooter, disparos, xbox"
    },
    {
      codigo: 5, nombre: 'Halo infinite', precio: 39990,
      descripcion: 'Shooter multiplayer todo en uno', img: '../../assets/prod/img/halo.jpg',
      tags : "halo, shooter, disparos, xbox"
    },
    {
      codigo: 6, nombre: 'Sunset overdrive', precio: 12990,
      descripcion: 'Sobrevive en el apocalipsis', img: '../../assets/prod/img/sunset.jpg',
      tags : "sunset, shooter, disparos, xbox, apocalipsis, zombies"
    },
    {
      codigo: 7, nombre: 'The last of us II', precio: 25990,
      descripcion: 'Survival contra los infectados', img: '../../assets/prod/img/tlou.jpg',
      tags : "playstation, shooter, sigilio, zombies, aventura, the last of us"
    },
    {
      codigo: 8, nombre: 'God of War', precio: 15990,
      descripcion: 'Mata dioses', img: '../../assets/prod/img/gow.jpg',
      tags : "nordico, dioses, acción, god of war, playstation, sangre"
    },
    {
      codigo: 9, nombre: 'Final fantasy VII', precio: 40990,
      descripcion: 'Remasterización del antiguo ffVII', img: '../../assets/prod/img/ff7.jpg',
      tags : "final fantasy, playstation, aventuras, accion, rpg"
    },
    {
      codigo: 10, nombre: 'Monster Hunter Rise', precio: 45990,
      descripcion: 'Caza monstruos', img: '../../assets/prod/img/mhrise.jpg',
      tags : "monster hunter, acción, monstruos, rpg, nintendo"
    },
    {
      codigo: 11, nombre: 'Zelda breath of the wild', precio: 32990,
      descripcion: 'Salva al reino hyrule', img: '../../assets/prod/img/zeldabotw.jpg',
      tags : "zelda, nintendo, acción, aventura, rpg"
    },
    {
      codigo: 12, nombre: 'Zelda link awakings', precio: 34990,
      descripcion: 'Salva a la isla', img: '../../assets/prod/img/zeldala.jpg',
      tags : "zelda, nintendo, acción, aventura, rpg"
    }
  ];

  productosActual = [   // Array para items en stock
    {
      codigo: 1, nombre: 'Final fantasy 8', precio: 7990,
      descripcion: 'juego jrpg de rol', img: '../../assets/prod/img/ff8.jpg',
      tags : "final fantasy, retro, rpg"
    },
    {
      codigo: 2, nombre: 'Mario Bros', precio: 10990,
      descripcion: 'juego de plataformas', img: '../../assets/prod/img/mariobros.jpg',
      tags : "mario, retro, plataformas, aventura"
    },
    {
      codigo: 3, nombre: 'Pokemon rojo fuego', precio: 3900,
      descripcion: 'juego de captura de pokemones ', img: '../../assets/prod/img/rojofuego.png',
      tags : "pokemon, retro, aventura"
    },
    {
      codigo: 4, nombre: 'Gears of war 5', precio: 29990,
      descripcion: 'campaña de shooter', img: '../../assets/prod/img/gears5.jpg',
      tags : "gears, shooter, disparos, xbox"
    },
    {
      codigo: 5, nombre: 'Halo infinite', precio: 39990,
      descripcion: 'Shooter multiplayer todo en uno', img: '../../assets/prod/img/halo.jpg',
      tags : "halo, shooter, disparos, xbox"
    },
    {
      codigo: 6, nombre: 'Sunset overdrive', precio: 12990,
      descripcion: 'Sobrevive en el apocalipsis', img: '../../assets/prod/img/sunset.jpg',
      tags : "sunset, shooter, disparos, xbox, apocalipsis, zombies"
    },
    {
      codigo: 7, nombre: 'The last of us II', precio: 25990,
      descripcion: 'Survival contra los infectados', img: '../../assets/prod/img/tlou.jpg',
      tags : "playstation, shooter, sigilio, zombies, aventura, the last of us"
    },
    {
      codigo: 8, nombre: 'God of War', precio: 15990,
      descripcion: 'Mata dioses', img: '../../assets/prod/img/gow.jpg',
      tags : "nordico, dioses, acción, god of war, playstation, sangre"
    },
    {
      codigo: 9, nombre: 'Final fantasy VII', precio: 40990,
      descripcion: 'Remasterización del antiguo ffVII', img: '../../assets/prod/img/ff7.jpg',
      tags : "final fantasy, playstation, aventuras, accion, rpg"
    },
    {
      codigo: 10, nombre: 'Monster Hunter Rise', precio: 45990,
      descripcion: 'Caza monstruos', img: '../../assets/prod/img/mhrise.jpg',
      tags : "monster hunter, acción, monstruos, rpg, nintendo"
    },
    {
      codigo: 11, nombre: 'Zelda breath of the wild', precio: 32990,
      descripcion: 'Salva al reino hyrule', img: '../../assets/prod/img/zeldabotw.jpg',
      tags : "zelda, nintendo, acción, aventura, rpg"
    },
    {
      codigo: 12, nombre: 'Zelda link awakings', precio: 34990,
      descripcion: 'Salva a la isla', img: '../../assets/prod/img/zeldala.jpg',
      tags : "zelda, nintendo, acción, aventura, rpg"
    }
  ];
  productosCarritoActual: any;

  constructor(){

  }
  ngOnInit(){
  }
  pago(){
    return[
    alert("Pago realizado!!")];
  }
  agregarProducto(i: any){
    if(this.productosCarrito.includes(this.productosActual[i])){
      console.log("Ya tiene el producto")
      for(let j = 0;j<this.productosCantidad.length;j++){
        if(this.productosActual[i].codigo == this.productosCantidad[j].codigo){
          this.productosCantidad[j].cant+=1;
        }
      }
      this.totalDinero+=this.productosActual[i].precio;
      localStorage.setItem("total",JSON.stringify(this.totalDinero));
      
    }
    else{
      console.log("No tiene el producto");
      this.productosCarrito.push(this.productosActual[i]);
      this.productosCantidad.push({codigo: this.productosActual[i].codigo, cant: 1});
      this.totalDinero+=this.productosActual[i].precio;
      localStorage.setItem("total",JSON.stringify(this.totalDinero))
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  eliminarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
        this.productosCarrito.splice(i,1);
        this.productosCantidad.splice(i+1,1);
      }
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  actualizarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        this.productosCantidad[i+1].cant = this.cantidad.value;
        this.totalDinero+=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
      }
    }
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  busquedaClave(){
    let pos = [];
    for(let i=0;i<this.productosActual.length;i++){
      if(this.productosActual[i].tags.search(this.clave.value) == -1){
        pos.push(this.productosActual[i].codigo);
      }
      else{
        console.log('Encontrado');
      }
    }
    for(let j=0;j<pos.length;j++){
      for(let i=0;i<this.productosActual.length;i++){
        if(pos[j]==this.productosActual[i].codigo){
          this.productosActual.splice(i,1);
        }
      }
    }
    
  }

  quitarBusqueda(){
    this.productosActual = [];
    for(let i=0; i<this.productosActual1.length;i++){
      this.productosActual.push({codigo: this.productosActual1[i].codigo, nombre: this.productosActual1[i].nombre, precio: this.productosActual1[i].precio, 
        descripcion: this.productosActual1[i].descripcion, img: this.productosActual1[i].img, tags: this.productosActual1[i].tags});
    }
    this.productosActual = this.productosActual1;
  }

}
