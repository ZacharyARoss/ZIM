import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { BaseComponent } from './components/base/base.component';
import { MsgsidebarComponent } from './components/msgsidebar/msgsidebar.component';
import { MsgpagelayoutComponent } from './components/msgpagelayout/msgpagelayout.component';
import { MsgappComponent } from './components/msgapp/msgapp.component';

@NgModule({
  declarations: [
    BaseComponent,
    HomepageComponent,
    LoginComponent,
    CreateaccountComponent,
    MsgsidebarComponent,
    MsgpagelayoutComponent,
    MsgappComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
