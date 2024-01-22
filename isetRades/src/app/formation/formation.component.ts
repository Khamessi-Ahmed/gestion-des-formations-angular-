import { Component, OnInit } from '@angular/core';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: any[] = [];
    filteredFormations: any[] = [];
    searchQuery: string = '';
  
    constructor(private formationService: FormationService) {}
  
    ngOnInit(): void {
      this.formationService.getFormation().subscribe((data) => {
        this.formations = data;
        this.filteredFormations = this.formations;
      });
    }
  
    onSearch(): void {
      this.filteredFormations = this.formations.filter((formation) => {
        const titleLowerCase = (formation.title || '').toLowerCase();
        const tagsIncludeQuery = this.tagsIncludeQuery(formation.tags, this.searchQuery.toLowerCase());
    
        return titleLowerCase.includes(this.searchQuery.toLowerCase()) || tagsIncludeQuery;
      });
    }
    
  
    private tagsIncludeQuery(tags: string[] | undefined, query: string): boolean {
      if (!tags) {
        return false;
         
      }

      return tags.some(tag => tag.toLowerCase().includes(query));
    }
}
