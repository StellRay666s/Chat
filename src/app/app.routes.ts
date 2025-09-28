import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path:'',
    loadComponent: ()=> import('./pages/main/main.component').then(c=>c.MainComponent)
 },
 {
    path:'auth',
    children:[
        {
            path:'',
            pathMatch:'full',
            redirectTo:'sign-in'
        },
        {
            path:'sign-in',
            loadComponent:()=>import('./pages/auth/sign-in/sign-in.component').then(c=>c.SignInComponent)
        },
        {
            path: 'register',
            loadComponent:()=>import('./pages/auth/register/register.component').then(c=>c.RegisterComponent)
        }
    ]
 }
];
