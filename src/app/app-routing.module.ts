import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanComponent } from './components/fan/fan.component';
import { FormFanComponent } from './components/form-fan/form-fan.component';
import { ShowFanComponent } from './components/show-fan/show-fan.component';

const routes: Routes = [
  { path: "home", component: ShowFanComponent },
  { path: "form-fan", component: FormFanComponent },
  { path: "home/:id", component: FanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
