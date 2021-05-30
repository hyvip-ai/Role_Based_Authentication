import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {

  constructor(private router:Router, private services:UserService) { }
  myshops:any = null
  user:any = null
  ngOnInit(): void {
  this.services.getsellerdetails().subscribe(res=>{
    console.log(res)
    this.user = res
  },err=>this.router.navigate(['/Login']))

  this.services.getshoplist().subscribe(res=>{
    console.log(res)
    this.myshops = res
    // console.log(this.myshops.mystores)
  })
  }

  shopform = new FormGroup({
   
    name:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required])
  })

  create(){
    this.shopform.addControl('owner',new FormControl(this.user.seller.name))
    console.log(this.shopform.value)
    this.services.addstore(this.shopform.value).subscribe(res=>{
      console.log(res)
    })

setTimeout(() => {
  this.services.getshoplist().subscribe(res=>{
    console.log(res)
    this.myshops = res
    console.log(this.myshops.mystores)
  })
}, 2000);
  }
  gotodetail(id:any){
    this.router.navigate([`/seller/shopdetail/${id}`])
  }
  additems(id:any){
    this.router.navigate([`/seller/Additem/${id}`])
  }
  delete(id:any){
    this.services.deleteshop(id).subscribe(res=>{
      console.log(res)
    })

    setTimeout(() => {
      this.services.getshoplist().subscribe(res=>{
        console.log(res)
        this.myshops = res
        console.log(this.myshops.mystores)
      })
    }, 2000);
  }


}
