import { Component, OnInit } from '@angular/core';
import { RestauranteService, Restaurante } from '../../restaurante/restaurante.service';
import { PratoService, Prato } from '../prato.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-prato-template-form',
    templateUrl: './prato-template-form.component.html',
    styleUrls: ['./prato-template-form.component.css']
})
export class PratoTemplateFormComponent implements OnInit {

    restaurantes: Restaurante[];

    constructor(private _restService: RestauranteService, private _pratoService: PratoService, private _router: Router) { }

    ngOnInit() {
        this.getRestaurantes();
    }

    getRestaurantes() {
        return this._restService.getRestaurantes().subscribe(restaurantes => this.restaurantes = restaurantes);
    }
    
    onSubmit(form) {
        return this._pratoService.insertPrato(form).subscribe(resp => {
            this._router.navigate(['/prato']);
        });
    }

}
