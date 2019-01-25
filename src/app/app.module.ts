import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { DesignComponent } from './components/design/design.component';
import { ComponentsComponent } from './components/components/components.component';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { PrismModule } from '@ngx-prism/core';
import { CodeSnippetComponent } from './components/shared/code-snippet/code-snippet.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CloseButtonComponent } from './components/shared/close-button/close-button.component';
import { AaButtonComponent } from './components/shared/aa-button/aa-button.component';
import { AaSwitchButtonComponent } from './components/shared/aa-switch-button/aa-switch-button.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    DesignComponent,
    ComponentsComponent,
    HomeComponent,
    CodeSnippetComponent,
    CloseButtonComponent,
    AaButtonComponent,
    AaSwitchButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,

    TabsModule.forRoot(),
    TooltipModule.forRoot(),

    PrismModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
