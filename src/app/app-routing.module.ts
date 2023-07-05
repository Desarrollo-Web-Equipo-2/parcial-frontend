import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CompaniesComponent } from './pages/companies/companies.component';
import { PersonsComponent } from './pages/persons/persons.component';

const routes: Routes = [
    {
        path: 'companies',
        component: CompaniesComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'persons',
        component: PersonsComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        redirectTo: 'companies',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
