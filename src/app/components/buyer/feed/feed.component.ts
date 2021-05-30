import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private router:Router,private service:UserService) { }
  feeddata:any = null
  ngOnInit(): void {

    this.service.getfeeditems().subscribe(res=>{
      console.log(res)
      this.feeddata = res
    },err=>this.router.navigate(['/Login']))
  }

  placeorder(id:any){
    this.router.navigate([`/buyer/placeorder/${id}`])
  }

}
