import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { AuthService } from '../service/auth.service';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  idform:any=2;
  id:any;
  idsses:any;

  formation:any;
  session:any[]=[];
  train:any;
 constructor( private serv:FormationService, private sess:SessionService, private au:AuthService){};

 ngOnInit(){



this.appsession();
this.gettraine();


 }
 /*islogin(){
   return this.au.isLoggedIn();
 }*/

 appsession(){
   this.sess.getsessions().subscribe((data:any)=>{
   this.session=data;
  })

  
 }


  /*appsses() {
    this.id = this.au.getuserloc();
    for (let c of this.session) {
      if (this.id === c.trainers) {
        this.idsses = c.id;
        this.sess.getsession(this.idsses).subscribe((data: any) => {
          this.session = data;
          this.lessession.push(this.session);
        });
      }
    }
  }*/
 gettraine(){
this.au.gettrainer(this.id).subscribe((data:any)=>{
this.train=data
})
}

}