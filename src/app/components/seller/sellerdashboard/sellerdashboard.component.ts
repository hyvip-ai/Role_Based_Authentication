import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }
  seller:any = null
  ngOnInit(): void {
    this.service.getsellerdetails().subscribe(res=>{
      console.log(res)
      this.seller = res
    },err=>this.router.navigate(['/Login']))
  }

}
