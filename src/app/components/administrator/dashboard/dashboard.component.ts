import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private services:UserService,private location:Location) { }
  mydata:any = null
  firstdata:any = null
  ngOnInit(): void {

    this.services.getadmindetails().subscribe(req=>{
     
      console.log(req)
      this.firstdata = req
      console.log(this.firstdata.administrator.Role)
      if(this.firstdata.administrator.Role!='Administrator'){
       this.location.back()
      }
      else{
        this.mydata = req
      }
    },err=>this.router.navigate(['/Login']))
    

  }

}
