import  Typed from 'typed.js';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  constructor() { }

  ngOnInit(): void {
    
    const options = {
      stringsElement: '#typed-strings',
      strings: ['Marcos Informática', 'Consertos em geral em tecnologia', 'traga para nós seu aparelho'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
      };
     
      const typed = new Typed('.animacao', options);
     
  }

  // método para capturar eventos de clique do botão menu
  toggleNavbar() { 
    // cada clique do usuário alteerna o valor de true/false
    this.navbarOpen =! this.navbarOpen; 
  } 


}
