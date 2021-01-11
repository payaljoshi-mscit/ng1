import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mydir1Directive } from './mydir1.directive';
import { SqrtPipe } from './sqrt.pipe';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Form1Component } from './form1/form1.component';
import { TformComponent } from './tform/tform.component';
import { ChatformComponent } from './chatform/chatform.component';
import { C2Component } from './c2/c2.component';
import { TempformComponent } from './tempform/tempform.component';
import { ReactformComponent } from './reactform/reactform.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    PipeTestComponent,
    Mydir1Directive,
    SqrtPipe,
    HeroesComponent,
    HeroDetailComponent,
    Form1Component,
    TformComponent,
    ChatformComponent,
    C2Component,
    TempformComponent,
    ReactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
