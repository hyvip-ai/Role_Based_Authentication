import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor(private services:UserService,private router:Router) { }
  myorders:any = null
  ngOnInit(): void {
    this.services.getmyorders().subscribe(res=>{
      console.log(res)
      this.myorders = res
    },err=>this.router.navigate(['/Login']))
  }

}
