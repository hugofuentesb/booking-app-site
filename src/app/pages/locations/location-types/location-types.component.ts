import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { IntegrationApiService } from 'src/app/services/integration-api.service';

@Component({
  selector: 'app-location-types',
  templateUrl: './location-types.component.html',
  styleUrls: ['./location-types.component.scss']
})
export class LocationTypesComponent implements OnInit {

  locationTypes$!: Observable<SelectItem[]>;
  showCreateDialog: boolean = false;

  constructor(private integrationApiService: IntegrationApiService) { }

  ngOnInit(): void {
    this.loadLocationTypesList();
  }

  loadLocationTypesList() {
    this.locationTypes$ = this.integrationApiService.getLocationTypes({});

    //let filter = this.selectedLocationType ? { id_location_type: this.selectedLocationType } : {};
    let filter = {};
    this.locationTypes$ = this.integrationApiService.getLocationTypes( filter );

  }

}
