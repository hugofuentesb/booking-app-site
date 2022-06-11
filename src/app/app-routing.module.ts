import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewLocationComponent } from './pages/locations/add-new-location/add-new-location.component';
import { ListLocationsComponent } from './pages/locations/list-locations/list-locations.component';
import { LocationTypesComponent } from './pages/locations/location-types/location-types.component';

const routes: Routes = [
  { path: 'locations', component: ListLocationsComponent },
  { path: 'add-new-location', component: AddNewLocationComponent },
  { path: 'location-types', component: LocationTypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
