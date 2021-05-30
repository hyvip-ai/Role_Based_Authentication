import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

  constructor(private router:Router,private service:UserService,private activatedroutes:ActivatedRoute) { }
  itemform = new FormGroup({
    name:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required])
  })
  seller:any = null
  store:any = null
  ngOnInit(): void {
    this.service.getsellerdetails().subscribe(res=>{
      // console.log(res)
      this.seller = res
      this.seller = this.seller.seller.name

    },err=>this.router.navigate(['/Login']))
  this.service.getstoredetails(this.activatedroutes.snapshot.params.id).subscribe(res=>{
    // console.log(res)
    this.store = res;
    this.store = this.store.shop.name
  })
  }
  submitvalue(){
    this.itemform.addControl('owner',new FormControl(this.seller))
    this.itemform.addControl('storename',new FormControl(this.store))
    console.log(this.itemform.value)
    this.service.createiteam(this.itemform.value,this.activatedroutes.snapshot.params.id).subscribe(res=>{ 
      console.log(res)
    })
  }
}
