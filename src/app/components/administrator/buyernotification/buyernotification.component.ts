import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-buyernotification',
  templateUrl: './buyernotification.component.html',
  styleUrls: ['./buyernotification.component.css']
})
export class BuyernotificationComponent implements OnInit {

  constructor(private services:UserService) { }
  newsellerarray:any = null
  newseller:number = 0
mydata:any = null
page:number = 1
  ngOnInit(): void {
    this.services.getbuyerlist().subscribe(res=>{
      console.log(res);
      this.mydata = res
    })

    this.services.getnewbuyers().subscribe(res=>{
      console.log(res);
      this.newsellerarray = res

      this.newseller = this.newsellerarray.messege.length
    })

  }

}
