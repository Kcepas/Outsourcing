
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { FeaturesComponent } from './features/features.component';
import { OurProgressComponent } from './our-progress/our-progress.component';
import { ContactComponent } from './contact/contact.component';
import { ItSupportComponent } from './it-support/it-support.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';
import { CustomSolutionsComponent } from './custom-solutions/custom-solutions.component';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroSectionComponent,
    ChooseUsComponent,
    FeaturesComponent,
    OurProgressComponent,
    ContactComponent,
    ItSupportComponent,
    WebDevelopmentComponent,
    CloudServicesComponent,
    CustomSolutionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
