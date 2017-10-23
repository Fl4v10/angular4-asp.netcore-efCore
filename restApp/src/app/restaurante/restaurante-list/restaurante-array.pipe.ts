import { PipeTransform, Pipe } from '@angular/core';
import { Restaurante } from '../restaurante.service';

@Pipe({
    name: 'restauranteFilter',
    pure: false
})

export class RestauranteFilter implements PipeTransform {
    transform(items: Restaurante[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.nome.indexOf(filter) !== -1);
    }
}