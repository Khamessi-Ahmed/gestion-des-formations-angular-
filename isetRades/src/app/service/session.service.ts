import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessURL="http://localhost:3000/sessions";

  constructor( private http:HttpClient,private auth:AuthService) {}

  getsession(id: any){
     const url=`${this.sessURL}/${id}`;
     return this.http.get<any>(url);
  }
  inscrit(id:any){
    let userid=this.auth.getuserloc();
    this.getsession(id).subscribe((data:any)=>
    { 
      data.participants.push(id)
      data.registerCandidat+=1
      this.http.put(`${this.sessURL}/${id}`,data).subscribe()
    }
    )
    
  }
  getsessions():Observable<any>{
    
    return this.http.get<any[]>(this.sessURL);
 }
  
}
