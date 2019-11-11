import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule,FormsModule,FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { GetComponent } from './get/get.component';
import {ReposerviceService} from './reposervice.service';
import { DownloadComponent } from './download/download.component'


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent,
    GetComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReposerviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
