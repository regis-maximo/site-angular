import { ServicosComponent } from './servicos/servicos.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'welcome', component: ContentComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'servicos', component: ServicosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
