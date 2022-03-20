import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// Pages
import { HomeComponent } from './modules/home/home.component';
import { FrontendStyleComponent } from './modules/frontend-style/frontend-style.component';
import { BackendStyleComponent } from './modules/backend-style/backend-style.component';
import { DocumentationComponent } from './modules/documentation/documentation.component';

// Component
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';

// Services
import { OpenweatherServiceService } from 'src/app/services/openweather-service.service';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { BackendServiceService } from 'src/app/services/backend-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentationComponent,
    FrontendStyleComponent,
    BackendStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HeaderModule,
    FooterModule
  ],
  providers: [
    OpenweatherServiceService,
    PokemonServiceService,
    BackendServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
