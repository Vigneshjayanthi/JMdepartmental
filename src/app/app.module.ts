import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductComponent } from './Admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './Admin/admin-order/admin-order.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyorderComponent } from './myorder/myorder.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminOrderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'myorder',component:MyorderComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'order-sucess',component:OrderSuccessComponent},
      {path:'admin/Mangeproduct',component:AdminProductComponent},
      {path:'admin/order',component:AdminOrderComponent},
      {path:'login', component:LoginComponent}
    ]),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
