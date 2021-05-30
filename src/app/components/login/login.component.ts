import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform = new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(4)])
})
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
  }
mymsg:any = null
  login(){
    console.log(this.loginform.value);
    this.service.login(this.loginform.value).subscribe(res=>{
      console.log(res);
      this.mymsg = res
   
     
        console.log(this.mymsg.Token)
      
        localStorage.setItem('token',this.mymsg.Token);
        console.log(localStorage.getItem('token'))
        if(this.mymsg.User.Role=='seller'){
          this.router.navigate(['/seller/sellerdashboard'])
        }
        else if(this.mymsg.User.Role=='buyer'){
          this.router.navigate(['/buyer/buyerdashboard'])
        }
        else{
          this.router.navigate(['/Administrator/dashboard'])
        }
      
    })
  }

}
