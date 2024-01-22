import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService ,private formatinservice:FormationService) {}
  ok:boolean=false;
  updatedUser: any = {};
  newUser: any = {
    username: '',
    password: '',
    role: '',
    formations : []
   
  };
  lesformations: any[] = [];


  newFormation: any = {
    titre: '',  
    description: '',
    charge: '',
    horaire: '',
    programme: '',
    niveauDifficulte: '',
    tags: [],
    categorie: '',
    price: 0,
    image: ''
  };












  users: any[] = [];

  ngOnInit() {
    this.getUsers();
    this.getFormations();
  }

  getUsers() {
    
    this.authService.getUsers().subscribe((data) => {
      this.users = data.users;
    });
  }

  editUser(id: any) {
    console.log('Editing User ID:', id);
    console.log('Updated User:', this.updatedUser);
  
    this.authService.editUser(id, this.updatedUser).subscribe(
      () => {
        console.log('User updated successfully');
        this.getUsers(); 
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
  
 
  
  
  addUser() {
    
    this.authService.addUser(this.newUser).subscribe(
      (addedUser) => {
        this.users.push(addedUser);
        this.newUser = {
          id: 0,
          username: '',
          role: '',
          password: '',
          formations: []
        };
        this.ok = false;
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
    deleteUser(id:any){
      this.authService.deleteUser(id).subscribe(
        () => {
          this.users = this.users.filter((user) => user.id !== id);
        
        },
      );
    }










/////////////////formation


getFormations() {
  this.formatinservice.getFormation().subscribe((data) => {
    this.lesformations = data;
  });
}






addFormation() {
  
   this.newFormation = {
    titre: '',  
    description: '',
    charge: '',
    horaire: '',
    programme: '',
    niveauDifficulte: '',
    tags: [],
    categorie: '',
    price: 0,
    image: ''
  };

  this.formatinservice.addFormation(this.newFormation).subscribe(
    (addedFormation) => {
      this.lesformations.push(addedFormation);
    
    },
    (error) => {
      console.error('Error adding formation:', error);
    }
  );



}





deleteFormation(id: any) {
  this.formatinservice.deleteFormation(id).subscribe(
    () => {
      this.lesformations = this.lesformations.filter((formation) => formation.id !== id);
    },
    (error) => {
      console.error('Error deleting formation:', error);
    }
  );
}




}


