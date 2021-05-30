import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
// import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }
  mynotification:any = null
  ngOnInit(): void {

    this.service.getall().subscribe(res=>{
      this.mynotification = res;
      console.log(this.mynotification)
    })
  }

}
