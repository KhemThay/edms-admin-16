import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbInputModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbEvaIconsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
