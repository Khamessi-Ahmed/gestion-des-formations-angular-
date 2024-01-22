import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';
import { AuthService } from '../service/auth.service';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  idform:any=2;
  id:any;
  formation:any;
  session:any[]=[];
  train:any;
 constructor( private serv:FormationService, private sess:SessionService, private au:AuthService){};

 ngOnInit(){


this.appformation();
this.appsession();
this.gettraine();


 }
 /*islogin(){
   return this.au.isLoggedIn();
 }*/
 appformation(){
  this.id = this.au.getuserloc();
  for (let c of this.session) {
    if ((this.id) in c.participants){
      this.idform=c.formation_id;



    }}
 
      this.serv.getFormationbyid(this.idform).subscribe((data:any )=>{
   this.formation =data
  }
  )


  
 
}
 appsession(){
   this.sess.getsessions().subscribe((data:any)=>{
   this.session=data;
  })
  
 }
 gettraine(){
this.au.gettrainer(this.id).subscribe((data:any)=>{
this.train=data
})
}

}