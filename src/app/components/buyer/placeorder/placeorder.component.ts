import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  constructor(private service:UserService,private activatedroutes:ActivatedRoute,private router:Router) { }
  itemdata:any = null
  placedorder:any = null
 orderform = new FormGroup({
   
 })
  price:number = 0
  quantity:number = 1
  ngOnInit(): void {

    this.service.getitemdetais(this.activatedroutes.snapshot.params.id).subscribe((res)=>{
      console.log(res);
      this.itemdata = res
      this.price = parseFloat(this.itemdata.item.price)
      console.log(this.price)
      // console.log(this.price)

    },err=>this.router.navigate(['/Login']))
  }
  priceincearese(){
  this.price = this.itemdata.item.price * this.quantity 
  }
  order(){
    this.orderform.setControl('productname',new FormControl(this.itemdata.item.name))
    this.orderform.setControl('price',new FormControl(this.price))
    this.orderform.setControl('type',new FormControl(this.itemdata.item.type))
    this.orderform.setControl('productid',new FormControl(this.itemdata.item._id))
    this.orderform.setControl('ownerid',new FormControl(this.itemdata.item.ownerid))
    this.orderform.setControl('storeid',new FormControl(this.itemdata.item.storeid))
    this.orderform.setControl('storename',new FormControl(this.itemdata.item.storename))
    this.orderform.setControl('status',new FormControl('pending'))
    

    console.log(this.orderform.value)
    this.service.placeorder(this.orderform.value).subscribe(res=>{
      console.log(res)
      this.placedorder = res
      
    })
  } 

}
