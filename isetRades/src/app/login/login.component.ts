import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='';
  password='';
  constructor(private auth:AuthService,private router:Router){}
  conn(){
    this.auth.login(this.username,this.password).subscribe(
      (success)=>{
        if(success){
          this.router.navigate(['home']);
          console.log(this.username,this.password);
          }else{
            this.router.navigate(['login']);
            console.log(this.username,this.password);
        }

      }
    );
  }
}
