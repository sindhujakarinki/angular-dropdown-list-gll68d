import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AutosizeModule, MatSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
