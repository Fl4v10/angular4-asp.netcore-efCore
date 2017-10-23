import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

export class Prato {
    constructor(
        public id: number,

        public nome: string,
        public valor: number,

        public RestauranteId: number
    ) { }
}

@Injectable()
export class PratoService {

    constructor(private _http: Http) { }

    private url = 'http://localhost:4201/api/prato';

    extractData(res: Response) {
        return res.json();
    }

    getPratos(): Observable<Prato[]> {
        return this._http.get(this.url).map(this.extractData);
    }

    getPrato(id: number): Observable<Prato> {
        const url = `${this.url}/${id}`;
        return this._http.get(this.url).map(this.extractData);
    }

    insertPrato(prato) {

        let data = {
            "id": null,
            "nome": prato.value.nome,
            "valor": prato.value.valor,
            "restauranteId": prato.value.restauranteId
        }

        let body = JSON.stringify(data);
        console.log(data);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url, body, options)
            .map(res => res);
    }

    deletePrato(id: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this._http.delete(`${this.url}/${id}`, headers).map(res => res);
    }

}
