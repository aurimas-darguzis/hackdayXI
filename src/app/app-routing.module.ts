import { AaButtonComponent } from './components/shared/aa-button/aa-button.component';
import { CloseButtonComponent } from './components/shared/close-button/close-button.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components/components.component';
import { DesignComponent } from './components/design/design.component';
import { ContentComponent } from './components/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: 'design', component: DesignComponent },
  { path: 'components', component: ComponentsComponent,
    children: [
      { path: 'closeButton', component: CloseButtonComponent, pathMatch: 'full' },
      { path: 'aaButton', component: AaButtonComponent, pathMatch: 'full' }
    ]
},
  // { path: 'components', component: ComponentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
