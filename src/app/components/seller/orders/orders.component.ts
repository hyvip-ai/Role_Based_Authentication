import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }
  myorders:any = null
  ngOnInit(): void {

    this.service.getallorders().subscribe(res=>{
      console.log(res)
      this.myorders = res
    },err=>this.router.navigate(['/Login']))
  }
  accept(id:any){
    this.service.acceptorder(id).subscribe(res=>{
      console.log(res)
    })
  }
  delete(id:any){
    this.service.deleteorder(id).subscribe(res=>{
      console.log(res)
    })
  }

}
