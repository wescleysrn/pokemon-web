import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { FrontendStyleComponent } from './modules/frontend-style/frontend-style.component';
import { BackendStyleComponent } from './modules/backend-style/backend-style.component';
import { DocumentationComponent } from './modules/documentation/documentation.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'frontend', component: FrontendStyleComponent, },
  { path: 'backend', component: BackendStyleComponent, },
  { path: 'documentation', component: DocumentationComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
