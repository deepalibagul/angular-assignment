import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { FontawesomeComponent } from './components/fontawesome/fontawesome.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';
import { APIComponent } from './components/api/api.component';



@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    FontawesomeComponent,
    MiscellaneousComponent,
    APIComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
