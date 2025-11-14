import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AllrecipesComponent } from './pages/allrecipes/allrecipes.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AddrecipeComponent } from './pages/addrecipe/addrecipe.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { View1Component } from './pages/view1/view1.component';
import { View2Component } from './pages/view2/view2.component';
import { View3Component } from './pages/view3/view3.component';
import { View4Component } from './pages/view4/view4.component';
import { View5Component } from './pages/view5/view5.component';
import { View6Component } from './pages/view6/view6.component';
import { View7Component } from './pages/view7/view7.component';
import { View8Component } from './pages/view8/view8.component';
import { View10Component } from './pages/view10/view10.component';
import { View9Component } from './pages/view9/view9.component';
import { View11Component } from './pages/view11/view11.component';
import { ContactusComponent } from './pages/contactus/contactus.component';



const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'allrecipes', component: AllrecipesComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'addrecipe', component: AddrecipeComponent },
  {path:'recipes',component:RecipesComponent},
  {path:'view1',component:View1Component},
  {path:'view2',component:View2Component},
  {path:'view3',component:View3Component},
  {path:'view4',component:View4Component},
  {path:'view5',component:View5Component},
  {path:'view6',component:View6Component},
   {path:'view7',component:View7Component},
    {path:'view8',component:View8Component},
   {path:'view9',component:View9Component},
   {path:'view10',component:View10Component}, 
     {path:'view11',component:View11Component}, 
       {path:'contactus',component:ContactusComponent}, 
  { path: '**', redirectTo: 'login' }

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
