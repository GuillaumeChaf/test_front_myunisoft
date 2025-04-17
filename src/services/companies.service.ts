import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Company } from '../models/company';

export type inseeType = {
  header: any;
  etablissements: any[];
};
@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private httpService: HttpClient) {}

  getCompaniesList(textualFilter?: string): Observable<Company[]> {
    const textualParam = textualFilter ? `?q=raisonSociale:${textualFilter}` : '';
    return this.httpService
      .get<inseeType>(`https://api.insee.fr/entreprises/sirene/siret${textualParam}`)
      .pipe(map((v) => v.etablissements.map((w) => new Company(w))));
  }
}
