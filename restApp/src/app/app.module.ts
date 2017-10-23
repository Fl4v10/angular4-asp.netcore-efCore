import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//Components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule } from '@angular/forms';

//Bootstrap imports
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';

//Meus componentes
import { RestauranteComponent } from './restaurante/restaurante.component';
import { PratoComponent } from './prato/prato.component';
import { PratoTemplateFormComponent } from './prato/prato-template-form/prato-template-form.component';
import { RestauranteTemplateFormComponent } from './restaurante/restaurante-template-form/restaurante-template-form.component';

//Services
import { RestauranteService } from './restaurante/restaurante.service';
import { PratoService } from './prato/prato.service';
import { routing } from './app.routing';
import { RestauranteListComponent } from './restaurante/restaurante-list/restaurante-list.component';
import { RestauranteFilter } from './restaurante/restaurante-list/restaurante-array.pipe';
import { PratoListComponent } from './prato/prato-list/prato-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TabsComponent,
        BannerComponent,
        RestauranteComponent,
        PratoComponent,
        PratoTemplateFormComponent,
        RestauranteTemplateFormComponent,
        RestauranteListComponent,
        PratoListComponent,
        RestauranteFilter
    ],
    imports: [
        HttpModule,
        HttpClientModule,
        BrowserModule,
        TabsModule.forRoot(),
        CarouselModule.forRoot(),
        FormsModule,
        routing
    ],
    providers: [RestauranteService, PratoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
