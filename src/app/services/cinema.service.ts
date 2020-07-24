import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public host:string="http://localhost:8083"

  constructor(private http:HttpClient) { }
  public getVilles(){
   return this.http.get(this.host+"/villes");
  }
  getCinemas(v){
    return this.http.get(v._links.cinemas.href);
  }
  getSalles(c){
    return this.http.get(c._links.salles.href);
  }
  getProjections(salle){
    let url=salle._links.projections.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p1");


  }
 
  getTicketsPlaces(p) {
    let url = p._links.tickets.href.replace('{?projection}', '');
    return this.http.get(url+'?projection=ticketProj');
  }
  payerTickets(f){
    const url = `${this.host}/payerTickets`
    return this.http.post(url, f);
  }
}
