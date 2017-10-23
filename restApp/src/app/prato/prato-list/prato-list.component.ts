import { Component, OnInit } from '@angular/core';
import { PratoService, Prato } from '../prato.service';

@Component({
    selector: 'app-prato-list',
    templateUrl: './prato-list.component.html',
    styleUrls: ['./prato-list.component.css']
})
export class PratoListComponent implements OnInit {

    pratos: Prato[];
    prato: Prato;

    constructor(private _pratoService: PratoService) { }

    ngOnInit() {
        this.getPratos();
    }

    getPratos() {
        return this._pratoService.getPratos().subscribe(pratos => this.pratos = pratos);
    }

    deletePrato(id) {
        return this._pratoService.deletePrato(id).subscribe(resp => {
            for (var i = 0; i < this.pratos.length; i++) {
                if (this.pratos[i].id === id) {
                    this.pratos.splice(i, 1);
                }
            }
        });
    }
}
