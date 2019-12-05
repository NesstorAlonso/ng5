import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AbautComponent } from './abaut/abaut.component';


const routes: Routes = [
  {
   path:'',
   component: HomeComponent 
  },
  {
    path:'abaut/:id',
    component: AbautComponent 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
