import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-buyerdashboard',
  templateUrl: './buyerdashboard.component.html',
  styleUrls: ['./buyerdashboard.component.css']
})
export class BuyerdashboardComponent implements OnInit {
  buyer:any = null
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.service.getbuyerdetail().subscribe(res=>{
      console.log(res)
      this.buyer = res
    },err=>this.router.navigate(['/Login']))
  }

}
