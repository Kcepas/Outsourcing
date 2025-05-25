import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { FeaturesComponent } from './features/features.component';
import { OurProgressComponent } from './our-progress/our-progress.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';  
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';  
import { ItSupportComponent } from './it-support/it-support.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';  
import { CustomSolutionsComponent } from './custom-solutions/custom-solutions.component'; 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'why-choose-us', component: ChooseUsComponent },
  { path: 'services', component: FeaturesComponent },
  { path: 'our-process', component: OurProgressComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }, 
  { path: 'terms-of-service', component: TermsOfServiceComponent }, 
  { path: 'it-support', component: ItSupportComponent },  
  { path: 'web-development', component: WebDevelopmentComponent },  
  { path: 'cloud-services', component: CloudServicesComponent }, 
  { path: 'custom-solutions', component: CustomSolutionsComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    PrivacyPolicyComponent,
    TermsOfServiceComponent
  ]
})
export class AppRoutingModule { }
