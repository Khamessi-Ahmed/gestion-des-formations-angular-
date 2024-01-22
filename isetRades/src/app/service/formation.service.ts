import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formationURL="http://localhost:3000/formations";
  constructor(private http: HttpClient) { }
  getFormation(): Observable<any[]>{
    return this.http.get<any[]>(this.formationURL);
    
  }
  getFormationbyid(id: any): Observable<any> {
    const url = `${this.formationURL}/${id}`;
    return this.http.get<any>(url);
  }
  
  addFormation(newFormation: any): Observable<any> {
    return this.http.post<any>(this.formationURL, newFormation);
  }

  deleteFormation(id: any): Observable<any> {
    const url = `${this.formationURL}/${id}`;
    return this.http.delete<any>(url);
  }
}
