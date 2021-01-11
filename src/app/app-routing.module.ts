import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { ChatformComponent } from './chatform/chatform.component';
import { Form1Component } from './form1/form1.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { ReactformComponent } from './reactform/reactform.component';
import { TempformComponent } from './tempform/tempform.component';
import { TformComponent } from './tform/tform.component';

const routes: Routes = [
  {path: "reactform",component: ReactformComponent },
  {path: "tempform",component: TempformComponent },
  {path: "c2",component: C2Component },
  {path: "chatform",component: ChatformComponent },
  {path: "comp1",component: C1Component},
  {path: "pipetest", component: PipeTestComponent},
  {path:"heroes", component: HeroesComponent },
  {path:"form1",component: Form1Component},
  {path:"tform",component:TformComponent},
  {path: "", component: PipeTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
