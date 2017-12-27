import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';
/*
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatFormFieldModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
