import { Component, OnInit } from '@angular/core';
import { FormationService } from '../service/formation.service'; // Assuming FormationService is the correct name of your service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formation: any[]=[];

  constructor(private serv: FormationService) {}

  ngOnInit(): void {
    this.serv.getFormation().subscribe((data) => {
      this.formation = data;
    });
  }

}
