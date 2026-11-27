import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Recipes } from './recipes/recipes';
import { Details } from './details/details';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { SavedRecipes } from './saved-recipes/saved-recipes';


export const routes: Routes = [
    {path:'',component:Home},
    {path:'recipes',component:Recipes},
    {path:'details/:id',component:Details},
    {path:'about',component:About},
    {path:'contact',component:Contact},
    {path:'profile',component:Profile},
    {path:'saved',component:SavedRecipes},
    {path:'login',component:Login},
    {path:'register',component:Register},
];
