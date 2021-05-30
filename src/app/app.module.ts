import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { DashboardComponent } from './components/administrator/dashboard/dashboard.component';
import { SellernotificationComponent } from './components/administrator/sellernotification/sellernotification.component';
import { BuyernotificationComponent } from './components/administrator/buyernotification/buyernotification.component';
import { NotificationComponent } from './components/administrator/notification/notification.component';
import { SellerComponent } from './components/seller/seller.component';
import { AddshopComponent } from './components/seller/addshop/addshop.component';
import { AdditemsComponent } from './components/seller/addshop/additems/additems.component';
import { OrdersComponent } from './components/seller/orders/orders.component';
import { SellerdashboardComponent } from './components/seller/sellerdashboard/sellerdashboard.component';
import { DetailsComponent } from './components/seller/details/details.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { BuyerdashboardComponent } from './components/buyer/buyerdashboard/buyerdashboard.component';
import { FeedComponent } from './components/buyer/feed/feed.component';
import { MyordersComponent } from './components/buyer/myorders/myorders.component';
import { PlaceorderComponent } from './components/buyer/placeorder/placeorder.component';
import { SoldproductsComponent } from './components/administrator/soldproducts/soldproducts.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdministratorComponent,
    DashboardComponent,
    SellernotificationComponent,
    BuyernotificationComponent,
    NotificationComponent,
    SellerComponent,
    AddshopComponent,
    AdditemsComponent,
    OrdersComponent,
    SellerdashboardComponent,
    DetailsComponent,
    BuyerComponent,
    BuyerdashboardComponent,
    FeedComponent,
    MyordersComponent,
    PlaceorderComponent,
    SoldproductsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
