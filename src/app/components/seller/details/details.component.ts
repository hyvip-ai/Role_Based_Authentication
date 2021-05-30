import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router:Router,private service:UserService,private activatedroutes:ActivatedRoute) { }
  mylist:any = null
  ngOnInit(): void {
    this.service.getallitems(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      console.log(res)
      this.mylist = res
    },err=>this.router.navigate(['/Login']))
  }
  deleteitem(id:any){
    this.service.deleteitem(id).subscribe(res=>{
      console.log(res)
    })
  }
}
