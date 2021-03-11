import { Component } from '@angular/core';

@Component({
  selector: "app-contador",
  template: `
  <head>
  <title>Primer Acercamiento</title>
</head>

<body>
  <h1>Contador definido por bases:</h1>
  <h2>La base es: <strong> {{base}} </strong></h2>
  <button (click)="bas(1)"> +1</button>
  <button (click)="bas(-1)"> -1</button>
  <h1>Contador:</h1>
  <button (click)="acumular(base)"> +</button>
  <span> {{numero}} </span>
  <button (click)="acumular(-base)"> -</button>
</body>
  `
})
export class ContadorComponent{
  title = 'contador';
  base: number = 1;
  numero: number = 0;
  acumular(valor:number) {
    this.numero += valor;
  }
  bas(valor:number) {
    this.base += valor;
    if (this.base < 0) {
      this.
        base = 0;
    }
  }
}
