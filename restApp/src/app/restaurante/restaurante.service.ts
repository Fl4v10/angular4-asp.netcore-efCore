import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

export class Restaurante {
    constructor(
        public id: number,

        public nome: string,

        public pratos: Prato[]
    ) { }
}

export class Prato {
    constructor(
        public id: number,

        public nome: string,
        public valor: number,

        public RestauranteId: number
    ) { }
}

@Injectable()
export class RestauranteService {

    constructor(private _http: Http) { }
    
    private url = 'http://localhost:4201/api/restaurante';

    extractData(res: Response) {
        return res.json();
    }

    getRestaurantes() : Observable<Restaurante[]> {
        return this._http.get(this.url).map(this.extractData);
    }

    getRestaurante(id: number): Observable<Restaurante> {
        const url = `${this.url}/${id}`;
        return this._http.get(this.url).map(this.extractData);
    }

    insertRestaurante(restaurante) {

        let data = {
            "id": null,
            "nome": restaurante.value.nome,
            "pratos": null
        }
        
        let body = JSON.stringify(data);
        console.log(data);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url, body, options)
            .map(res => res);
    }

    deleteRestaurante(id: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this._http.delete(`${this.url}/${id}`, headers).map(res => res);
    }
}

