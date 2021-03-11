import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor"];
  caido:any="";
  borrar() {
    this.caido = this.heroes.pop();
  }
}
