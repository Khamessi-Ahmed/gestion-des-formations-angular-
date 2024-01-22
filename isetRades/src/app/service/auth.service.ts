import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  alluser=<any>[];
  userUrl="../../assets/db.json";
 users=" http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  login(username:any,password:any){
      return this.http.get<any>(this.userUrl).pipe(map((data)=>{
        this.alluser=data;
        const users=data.users.find((user:any)=>
        (user.username===username && user.password===password));
        if(users){
          window.localStorage.setItem("accessToken",users.accessToken);
          window.localStorage.setItem("userId",users.id);
          window.localStorage.setItem("userRole",users.role);
          return true;
        }
        else{
          return false;
        }
      }))

  }
  logOut(){
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("userRole");
  }
  isLoggedIn():boolean{
    return !!window.localStorage.getItem("accessToken")
  }
  getUserRole() {
    return window.localStorage.getItem('userRole');
  }
  getuserloc(){
    return window.localStorage.getItem('userId');
  }
  getUser(){
    return this.users;
  }
  getUsers() {
    return this.http.get<any>(this.userUrl);
  }
  deleteUser(userId: number): Observable<any> {
    const url = `${this.users}/${userId}`;
    return this.http.delete(url).pipe(
      catchError((error) => {
        console.error('Error deleting user:', error);
        return throwError('User deletion failed');
      })
    );
  }
  editUser(id: any, updatedUser: any): Observable<any> {
    const url = `${this.users}/${id}`;
    console.log('Update URL:', url);
    console.log('Updated User:', updatedUser);
  
    return this.http.put(url, updatedUser).pipe(
      catchError((error) => {
        console.error('Error updating user:', error);
        return throwError('User update failed');
      })
    );
  }
  
  
  
  

  addUser(user: any): Observable<any> {
    return this.http.post(this.users, user).pipe(
      catchError((error) => {
        console.error('Error adding user:', error);
        return throwError('User addition failed');
      })
    );
  }
  
   gettrainer (id: any) {
    const url=`${this.users}/${id}`;
    return this.http.get<any[]>(url);
 }

 getta7ayol(){
  return this.alluser;

 }
 
   }





