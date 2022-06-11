import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';

import { IntegrationApiService } from '../../../services/integration-api.service';

@Component({
  selector: 'app-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.scss']
})
export class ListLocationsComponent implements OnInit {

  locationTypes$!: Observable<SelectItem[]>;
  locations$!: Observable<SelectItem[]>;

  selectedLocation: any;
  selectedLocationType: any;

  showEditDialog: boolean = false;


  constructor(private integrationApiService: IntegrationApiService) { }

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions() {
    this.locationTypes$ = this.integrationApiService.getLocationTypes( {});

    let filter = this.selectedLocationType ? { id_location_type: this.selectedLocationType } : {};
    this.locations$ = this.integrationApiService.getLocations( filter );

  }

  changeLocatonType() {
    //console.log(this.selectedLocationType);
    this.locations$ = this.integrationApiService.getLocations( {id_location_type: this.selectedLocationType} );
  }

}
