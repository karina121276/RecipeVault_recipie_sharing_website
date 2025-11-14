import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AllrecipesComponent } from './pages/allrecipes/allrecipes.component';
import { AddrecipeComponent } from './pages/addrecipe/addrecipe.component';
import { HeaderComponent } from './pages/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { FooterComponent } from './pages/footer/footer.component';
import { View1Component } from './pages/view1/view1.component';
import { View2Component } from './pages/view2/view2.component';
import { View3Component } from './pages/view3/view3.component';
import { View4Component } from './pages/view4/view4.component';
import { View5Component } from './pages/view5/view5.component';
import { View6Component } from './pages/view6/view6.component';
import { View7Component } from './pages/view7/view7.component';
import { View8Component } from './pages/view8/view8.component';
import { View9Component } from './pages/view9/view9.component';
import { View10Component } from './pages/view10/view10.component';
import { View11Component } from './pages/view11/view11.component';
import { ContactusComponent } from './pages/contactus/contactus.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    AllrecipesComponent,
    AddrecipeComponent,
    HeaderComponent,
    RecipesComponent,
    FooterComponent,
    View1Component,
    View2Component,
    View3Component,
    View4Component,
    View5Component,
    View6Component,
    View7Component,
    View8Component,
    View9Component,
    View10Component,
    View11Component,
    ContactusComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
