import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ChuckComponent } from './chuck/chuck.component';

const routes: Routes = [
  { path: '', component: NewsComponent},  
  { path: 'chuck', component: ChuckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
