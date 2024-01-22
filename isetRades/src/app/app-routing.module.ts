import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CandidatComponent } from './candidat/candidat.component';
import { DetailsComponent } from './details/details.component';
import { FormateurComponent } from './formateur/formateur.component';

const routes: Routes = [

  { path:'formations/:id', component:DetailsComponent},
  {path:'formateur',component:FormateurComponent},

   { path:'condidat',component:CandidatComponent },
  { path:'admin',component:AdminComponent },
    {path: 'home', component: HomeComponent },
    {path:'formation',component:FormationComponent},
    {path:'login',component:LoginComponent},
  {path:'**',component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
