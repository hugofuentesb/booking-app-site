import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimengModule } from './primeng/primeng.module';

import { GeneralComponent } from './layouts/general/general.component';
import { ListLocationsComponent } from './pages/locations/list-locations/list-locations.component'

import { IntegrationApiService } from './services/integration-api.service';
import { HttpClientModule} from '@angular/common/http';
import { AddNewLocationComponent } from './pages/locations/add-new-location/add-new-location.component';
import { LocationTypesComponent } from './pages/locations/location-types/location-types.component';
import { AddNewLocationTypeComponent } from './pages/locations/add-new-location-type/add-new-location-type.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,

    GeneralComponent,
    ListLocationsComponent,
    AddNewLocationComponent,
    LocationTypesComponent,
    AddNewLocationTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    PrimengModule,
    //FontAwesomeModule,

    //IntegrationApiService
    HttpClientModule


  ],
  providers: [IntegrationApiService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
