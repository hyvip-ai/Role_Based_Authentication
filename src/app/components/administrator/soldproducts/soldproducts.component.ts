import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-soldproducts',
  templateUrl: './soldproducts.component.html',
  styleUrls: ['./soldproducts.component.css']
})
export class SoldproductsComponent implements OnInit {

  constructor(private services:UserService) { }
  myorder:any =null
  ngOnInit(): void {
    this.services.productdell().subscribe(res=>{
      console.log(res)
      this.myorder = res
    })
  }

}
