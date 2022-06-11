import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-add-new-location-type',
  templateUrl: './add-new-location-type.component.html',
  styleUrls: ['./add-new-location-type.component.scss']
})
export class AddNewLocationTypeComponent implements OnInit {

  locationType: any = {};
  msgs: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  createlocationType() {

  }

}
