import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestauranteService, Restaurante } from '../../restaurante/restaurante.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-restaurante-template-form',
  templateUrl: './restaurante-template-form.component.html',
  styleUrls: ['./restaurante-template-form.component.css']
})
export class RestauranteTemplateFormComponent implements OnInit {

    restaurantes: Restaurante[];
    success: number = 0;

    constructor(private _restService: RestauranteService, private _router: Router) { }

  ngOnInit() {
      this.getRestaurantes();
  }

  getRestaurantes() {
      return this._restService.getRestaurantes().subscribe(restaurantes => this.restaurantes = restaurantes);
  }

  onSubmit(form) {
      console.log(form);
      this._restService.insertRestaurante(form).subscribe(resp => {
          this._router.navigate(['/restaurante']);
      });
  }

}
