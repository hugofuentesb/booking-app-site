import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Message } from 'primeng/api/message';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { IntegrationApiService } from 'src/app/services/integration-api.service';

@Component({
  selector: 'app-add-new-location',
  templateUrl: './add-new-location.component.html',
  styleUrls: ['./add-new-location.component.scss']
})
export class AddNewLocationComponent implements OnInit {

  location: any = {};
  locationTypes$!: Observable<SelectItem[]>;
  msgs: Message[] = [];

  constructor(private messageService: MessageService,
              private integrationApiService: IntegrationApiService) { }

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions() {
    this.locationTypes$ = this.integrationApiService.getLocationTypes({});
  }

  createLocation() {
    console.table(this.location);
    this.location.user = "guest";
    this.integrationApiService.createLocation(this.location).subscribe( {
                                                                    next: (v) => this.successHandler(v),
                                                                    error: (e) => this.errorHandler(e),
                                                                    complete: () => this.completeHandler(),
                                                                  });

  }


  errorHandler(error: any) {
    console.table(error);
    this.messageService.add({severity:'error', summary: error.error.msg, detail: error.error.detail });
  }

  successHandler(next: any) {
    this.messageService.add({severity:'success', summary: next.msg, detail: ""});
  }

  completeHandler() {
    console.info("Petición completada");
  }

}

