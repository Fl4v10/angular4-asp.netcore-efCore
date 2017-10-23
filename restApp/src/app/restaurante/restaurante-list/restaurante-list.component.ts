import { Component, OnInit } from '@angular/core';
import { RestauranteService, Restaurante, Prato } from '../restaurante.service';
import { RestauranteFilter } from './restaurante-array.pipe';

@Component({
    selector: 'app-restaurante-list',
    templateUrl: './restaurante-list.component.html',
    styleUrls: ['./restaurante-list.component.css'],
    providers: [RestauranteService]
})

export class RestauranteListComponent implements OnInit {

    restaurantes: Restaurante[];
    restaurante: Restaurante;
    filterArg: string;

    constructor(private _restService: RestauranteService) { }

    ngOnInit() {
        this.getRestaurantes();
    }

    getRestaurantes() {
        return this._restService.getRestaurantes().subscribe(restaurantes => this.restaurantes = restaurantes);
    }

    deleteRestaurante(id) {
        return this._restService.deleteRestaurante(id).subscribe(resp => {
            for (var i = 0; i < this.restaurantes.length; i++) {
                if (this.restaurantes[i].id === id) {
                    this.restaurantes.splice(i, 1);
                }
            }
        });
    }

    pesquisarRestaurante(form: any) {
        return this.filterArg = form.value.nome;
    }

}
