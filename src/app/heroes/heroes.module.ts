import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        /* 
        Este módulo se emplea para importar características como el NgFor a nuestro
        módulo
        */
        CommonModule
    ]
})
export class HeroesModule {

}