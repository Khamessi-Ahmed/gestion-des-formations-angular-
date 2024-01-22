import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private auth: AuthService){}
    islogin(){
      return this.auth.isLoggedIn();
    }
    logOut(){
      return this.auth.logOut();
    }
    admin():boolean{
      return this.auth.getUserRole()==="admin";
    }
    formateur():boolean{
      return this.auth.getUserRole()==="formateur";
    }
    candidat():boolean{
      return this.auth.getUserRole()==="candidat";
    }
}

