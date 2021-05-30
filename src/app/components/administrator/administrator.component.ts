import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }
 
  ngOnInit(): void {


  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/Login'])
  }

}
