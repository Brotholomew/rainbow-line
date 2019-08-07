import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyParallaxDirective } from './my-parallax.directive';
import { DetailsComponent } from './details/details.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      MyParallaxDirective,
      DetailsComponent,
      ChatComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
