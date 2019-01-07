import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoemDetailsViewComponent } from './poem-details-view/poem-details-view.component';
import { UserDetailsViewComponent } from './user-details-view/user-details-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ListComponent } from './list/list.component';
import { MessageComponent } from './message/message.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { NewPoemComponent } from './new-poem/new-poem.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { BuddyViewComponent } from './buddy-view/buddy-view.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { OnlyLoggedUser } from './guards/OnlyLoggedUser';
import { HttpInterceptorGuard } from './guards/HttpInterceptorGuard';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


const routes : Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', 
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent
  },
  {
    path: 'dashboard/:user_id/:user_name',
    component: DashboardComponent,
    canActivate: [OnlyLoggedUser],
    children: [
      {
        path: 'topview',
        component: ListComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'messages',
        component: MessageComponent
      },
      {
        path: 'send_message',
        component: SendMessageComponent
      },
      {
        path: 'send_message/:name',
        component: SendMessageComponent 
      },
      {
        path: 'messageview/:id',
        component: MessageViewComponent
      },
      {
        path: 'buddies',
        component: BuddyViewComponent
      },
      {
        path: 'new_poem',
        component: NewPoemComponent
      },
      {
        path: 'profile_view/:name/:id',
        component: UserDetailsViewComponent
      },
      {
        path: 'poem/:id',
        component: PoemDetailsViewComponent
      },
      {path: '', redirectTo: 'topview', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomepageComponent,
    DashboardComponent,
    PoemDetailsViewComponent,
    UserDetailsViewComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    ListComponent,
    MessageComponent,
    SendMessageComponent,
    NewPoemComponent,
    MessageViewComponent,
    BuddyViewComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
    .forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers: [
    OnlyLoggedUser,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorGuard,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
