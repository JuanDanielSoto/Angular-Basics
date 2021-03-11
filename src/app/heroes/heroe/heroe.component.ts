import { Component, OnInit} from '@angular/core';

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
})
export class HeroeComponent{
  nombre: string = "Ironman";
  edad: number = 45
  cnom() {
    this.nombre = "Spiderman";
  }
  cedad() {
    this.edad = 16;
  }
}
