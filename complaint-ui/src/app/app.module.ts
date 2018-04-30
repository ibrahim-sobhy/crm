import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LifecyleComponent } from './lifecyle/lifecyle.component';
import { LifecycleService } from './services/lifecycle.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LifecyleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LifecycleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
