import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(body:any){
    return this.http.post('http://localhost:3000/api/login',body,{
      headers : new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'content-type' : 'application/json'
      })
    })
  }

  register(body:any){
   return this.http.post('http://localhost:3000/api/register',body,{
      headers : new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'content-type' : 'application/json'
      })
    })
  }
  getselerlist(){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/administrator/sellers`,{
      headers:new HttpHeaders({
        "auth":token,
       "Access-Control-Allow-origin":'*' ,
       'content-type':'application/json'
      })
    })
  }
  getnewseller(){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/administrator/newsellers`,{
      headers:new HttpHeaders({
        "auth":token,
       "Access-Control-Allow-origin":'*' ,
       'content-type':'application/json'
      })
    })
  }

  getbuyerlist(){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/administrator/newbuyerslist,{
      headers:new HttpHeaders({
        "auth":token,
       "Access-Control-Allow-origin":'*' ,
       'content-type':'application/json'
      })
    }`)
  }
  getnewbuyers(){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/administrator/newbuyers`,{
      headers:new HttpHeaders({
        "auth":token,
       "Access-Control-Allow-origin":'*' ,
       'content-type':'application/json'
      })
    })
  }
  getall(){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/administrator/all`,{
      headers:new HttpHeaders({
        "auth":token,
       "Access-Control-Allow-origin":'*' ,
       'content-type':'application/json'
      })
    })

  }
  getsellerdetails(){
    var token:any = localStorage.getItem('token')
    console.log(token)
   return this.http.get('http://localhost:3000/seller/sellerdetails',{
     headers:new HttpHeaders({
       "auth":token,
      "Access-Control-Allow-origin":'*' ,
      'content-type':'application/json'
     })
   }) 
  } 

  getadmindetails(){
    // admindetail
    var token:any = localStorage.getItem('token')
    console.log(token)
   return this.http.get('http://localhost:3000/api/admindetail',{
     headers:new HttpHeaders({
       "auth":token,
      "Access-Control-Allow-origin":'*' ,
      'content-type':'application/json'
     })
   }) 
  }

  addstore(data:any){
    var token:any = localStorage.getItem('token')
    console.log(token)
   return this.http.post('http://localhost:3000/seller/addstore',data,{
     headers:new HttpHeaders({
       "auth":token,
      "Access-Control-Allow-origin":'*' ,
      'content-type':'application/json'
     })
   }) 
  }
  getshoplist(){
    var token:any = localStorage.getItem('token')
    console.log(token)
   return this.http.get('http://localhost:3000/seller/shoplist',{
     headers:new HttpHeaders({
       "auth":token,
      "Access-Control-Allow-origin":'*' ,
      'content-type':'application/json'
     })
   }) 
  }

  deleteshop(id:any){
    var token:any = localStorage.getItem('token')
    console.log(token)
   return this.http.get(`http://localhost:3000/seller/delete/${id}`,{
     headers:new HttpHeaders({
       "auth":token,
      "Access-Control-Allow-origin":'*' ,
      'content-type':'application/json'
     })
   }) 
  }

  getstoredetails(id:any){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/seller/storedetail/${id}`,{
      headers:new HttpHeaders({
        "auth":token,
       "Access-Control-Allow-origin":'*' ,
       'content-type':'application/json'
      })
    })
  }
  createiteam(body:any,id:any){
    var token:any = localStorage.getItem('token')
    return this.http.post(`http://localhost:3000/seller/additem/${id}`,body,{
      headers:new HttpHeaders({
        'auth':token,
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json'
      })
    })

  }

  getallitems(id:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/seller/items/${id}`,{
      headers:new HttpHeaders({
        'Access-Conteol-Allow-Origin':'*',
        'auth':token,
        'content-type':'Application/json'
      })
    })

  }

  deleteitem(id:any){
    var token:any = localStorage.getItem('token')
return this.http.get(`http://localhost:3000/seller/deleteitem/${id}`,{
  headers:new HttpHeaders({
    'Access-Conteol-Allow-Origin':'*',
    'auth':token,
    'content-type':'Application/json'
  })

})
  }
 
  getbuyerdetail(){
    var token:any = localStorage.getItem('token')

    return this.http.get('http://localhost:3000/buyer/detail',{
      headers:new HttpHeaders({
        'Access-Conteol-Allow-Origin':'*',
        'auth':token,
        'content-type':'Application/json'
      })
    })

  }

  getfeeditems(){
    var token:any = localStorage.getItem('token')
    return this.http.get('http://localhost:3000/buyer/getalllproducts',{
      headers:new HttpHeaders({
        'Access-Conteol-Allow-Origin':'*',
        'auth':token,
        'content-type':'Application/json'
      })
    })
  }

  getitemdetais(id:any){
    var token:any = localStorage.getItem('token');

    return this.http.get(`http://localhost:3000/buyer/itemdetails/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'auth':token,
        'content-type':'application/json'
      })
    })
  }

  placeorder(body:any){
    var token:any = localStorage.getItem('token');
    return this.http.post(`http://localhost:3000/buyer/placeorder`,body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'auth':token,
        'content-type':'application/json'
      })
    })

  }

  getmyorders(){
    var token:any = localStorage.getItem('token');

    return this.http.get(`http://localhost:3000/buyer/getmyorders`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'auth':token,
        'content-type':'application/json'
      })
    })
  }

  getallorders(){
    var token:any = localStorage.getItem('token');

    return this.http.get(`http://localhost:3000/seller/getallorders`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'auth':token,
        'content-type':'application/json'
      })
    })
  }
  acceptorder(id:any){
    var token:any = localStorage.getItem('token');

    return this.http.get(`http://localhost:3000/seller/acceptorder/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'auth':token,
        'content-type':'application/json'
      })
    })
  }

  deleteorder(id:any){
    var token:any = localStorage.getItem('token');

    return this.http.get(`http://localhost:3000/seller/deleteorder/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'auth':token,
        'content-type':'application/json'
      })
    })
  }

  productdell(){
    var token:any = localStorage.getItem('token');

    return this.http.get(`http://localhost:3000/administrator/productdell`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'auth':token,
        'content-type':'application/json'
      })
    })
  }
}
