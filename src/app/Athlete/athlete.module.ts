import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthleteService } from './athlete.service';
import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { SharedModule } from '../shared/shared.module';
import { AthleteDetailComponent } from './athlete-detail/athlete-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        //SharedModule
    ],
    declarations: [
        AthleteListComponent, AthleteDetailComponent
    ],
    providers: [AthleteService],
    bootstrap: [AthleteListComponent]
})
export class AthleteModule { }