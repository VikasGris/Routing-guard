import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageFoundComponent } from './page-found/page-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { Page1Component } from './page1/page1.component';
import { PageFound1Component } from './page-found/page-found1/page-found1.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: 'page1', canActivate:[AuthGuard] ,component: Page1Component },
  {
    path: 'page-found', canActivateChild: [AuthGuard] , component: PageFoundComponent, children: [
      { path: 'page-found1', component: PageFound1Component }
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found'} },
  {path:'**' , redirectTo:'/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageFoundComponent,
    Page1Component,
    PageFound1Component,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
