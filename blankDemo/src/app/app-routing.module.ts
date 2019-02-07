import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'generateBill', pathMatch: 'full' },
  { path: 'generateBill', loadChildren: './bill/bill.module#BillPageModule' },
  {path:'cat',redirectTo: 'new-page', pathMatch: 'full'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-page', loadChildren: './new-page/new-page.module#NewPagePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
