import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sellernotification',
  templateUrl: './sellernotification.component.html',
  styleUrls: ['./sellernotification.component.css']
})
export class SellernotificationComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { 
    
  }
  newsellerarray:any = null
  newseller:number = 0
mydata:any = null

  ngOnInit(): void {
    
    this.service.getselerlist().subscribe(res=>{
      console.log(res)
      this.mydata = res
    })

    this.service.getnewseller().subscribe(res=>{
      this.newsellerarray = res
      // console.log(this.newsellerarray)

      this.newseller = this.newsellerarray.messege.length;
      // console.log(this.newseller)
    })
  }

  
 

}
