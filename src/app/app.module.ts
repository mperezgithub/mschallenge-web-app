import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientStatsComponent } from './client-stats/client-stats.component';
import {DpDatePickerModule} from 'ng2-date-picker';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientAddComponent,
    ClientStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
