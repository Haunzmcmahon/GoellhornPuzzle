import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DroplistComponent } from './droplist/droplist.component';

const routes: Routes = [
  {path: '', component:DroplistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
