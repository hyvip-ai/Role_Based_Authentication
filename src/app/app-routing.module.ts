import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { BuyernotificationComponent } from './components/administrator/buyernotification/buyernotification.component';
import { DashboardComponent } from './components/administrator/dashboard/dashboard.component';
import { NotificationComponent } from './components/administrator/notification/notification.component';
import { SellernotificationComponent } from './components/administrator/sellernotification/sellernotification.component';
import { SoldproductsComponent } from './components/administrator/soldproducts/soldproducts.component';
import { BuyerComponent } from './components/buyer/buyer.component';
import { BuyerdashboardComponent } from './components/buyer/buyerdashboard/buyerdashboard.component';
import { FeedComponent } from './components/buyer/feed/feed.component';
import { MyordersComponent } from './components/buyer/myorders/myorders.component';
import { PlaceorderComponent } from './components/buyer/placeorder/placeorder.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdditemsComponent } from './components/seller/addshop/additems/additems.component';
import { AddshopComponent } from './components/seller/addshop/addshop.component';
import { DetailsComponent } from './components/seller/details/details.component';

import { OrdersComponent } from './components/seller/orders/orders.component';
import { SellerComponent } from './components/seller/seller.component';
import { SellerdashboardComponent } from './components/seller/sellerdashboard/sellerdashboard.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'Register'
  },
  {
    path:'Register',component:RegisterComponent
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Administrator',component:AdministratorComponent,children:[
      {
        path:"dashboard",component:DashboardComponent
      },
      {
        path:'buyers',component:BuyernotificationComponent
      },
      {
        path:'seller',component:SellernotificationComponent
      },
      {
        path:'notification',component:NotificationComponent
      },
      {
        path:'sold',component:SoldproductsComponent
      }
    ]
  },
  {
    path:'seller',component:SellerComponent,children:[
      {
        path:'sellerdashboard',component:SellerdashboardComponent
      },
      {
        path:'AddShop',component:AddshopComponent
      },
      {
          path:'Additem/:id',component:AdditemsComponent
      },
      {
        path:'Orders',component:OrdersComponent
      },
     {
       path:'shopdetail/:id',component:DetailsComponent
     }
    ]
  }

  ,
  {
    path:'buyer',component:BuyerComponent,children:[
      {
        path:'buyerdashboard',component:BuyerdashboardComponent
      },
      {
        path:'feed',component:FeedComponent

      },
      {
        path:"myorder",component:MyordersComponent
      },
      {
      path:'placeorder/:id',component:PlaceorderComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
