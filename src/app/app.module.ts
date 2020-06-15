//form-module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//app-routing-module
import { AppRoutingModule } from './app-routing.module';

//angular-lib
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

//env-lib
import { environment } from '../environments/environment';

//child-component
import { AppComponent } from './app.component';
import { TopbarComponent } from './Components/Blocks/Topbar/topbar.component';
import { FooterComponent } from './Components/Blocks/footer/footer.component';
import { LeftSidebarComponent } from './Components/Blocks/left-sidebar/left-sidebar.component';
import { PageTitleComponent } from './Components/Pages/page-title/page-title.component';
import { CategoryComponent } from './Components/Pages/category/category.component';
import { MainloginComponent } from './Components/mainlogin/mainlogin.component';
import { HomeComponent } from './Components/Pages/home/home.component';



//all-service
import { AuthenticationService } from './Services/authentication.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { IndexComponent } from './Components/index/index.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    LeftSidebarComponent,
    PageTitleComponent,
    CategoryComponent,
    MainloginComponent,
    HomeComponent,
    DashboardComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
