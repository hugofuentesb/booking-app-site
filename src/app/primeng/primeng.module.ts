import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {MessageModule} from 'primeng/message';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import { FormsModule } from '@angular/forms';
//import { MessageService } from 'primeng/components/common/messageservice';

import { MessageService } from 'primeng/api';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
 declarations: [],
 imports: [
    CommonModule,
    ConfirmDialogModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    DialogModule,
    MessageModule,
    SidebarModule,
    TableModule,
    FileUploadModule,
    ToastModule,
    PanelModule,

    BrowserModule,
    BrowserAnimationsModule,
   ],
  exports:[
    ToastModule,
    FileUploadModule,
    ConfirmDialogModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    DialogModule,
    MessageModule,
    SidebarModule,
    PanelModule,
    TableModule,

    BrowserModule,
    BrowserAnimationsModule,
],
providers: [MessageService]

  //providers:[MessageService]
 })
 export class PrimengModule { }
