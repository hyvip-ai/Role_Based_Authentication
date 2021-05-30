import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)]),
    Role:new FormControl('',[Validators.required]),
    phno:new FormControl('',[Validators.required])
  })
  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerform.value);
    this.service.register(this.registerform.value).subscribe(res=>{
      console.log(res)
    })
  }

}
