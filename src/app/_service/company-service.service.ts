import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../_model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  url : string = `/companies`;
 
  constructor(private http : HttpClient) { }


  getAll(){
    return this.http.get<Company[]>(this.url);
  }


}
