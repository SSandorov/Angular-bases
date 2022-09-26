import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


export class ListadoComponent {
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor"];
  heroeBorrado: string = "";

  borrarHeroe(): void {
    /* El método shift devuelve string o undefined, por ello ponemos el operador
    lógico or (||) para decir que cuando sea undefined nos devuelva un string vacío,
    de esta manera nos ahorramos el fallo */
    this.heroeBorrado = this.heroes.shift() || "";
  }

  
}

