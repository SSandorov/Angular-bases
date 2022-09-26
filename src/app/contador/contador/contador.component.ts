import { Component } from "@angular/core";


@Component({
    selector: "app-contador",
    templateUrl: "contador.component.html" 
})
export class ContadorComponent {

    public titulo: string = 'Contador App';
    public numero: number = 0;
    public base: number = 10;

    // multiplicamos la base por el el signo correspondiente
    acumular(valor: number) {
        this.numero += valor;
    }
}