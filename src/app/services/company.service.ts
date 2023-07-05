import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../interfaces/company';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    constructor(private http: HttpClient) {
    }

    createCompany(company: Company){
        return this.http.post('http://localhost:3000/api/company', {company});
    }

    getCompanies(){
        return this.http.get<Company[]>('http://localhost:3000/api/company');
    }

    getCompanyById(id: number){
        return this.http.get(`http://localhost:3000/api/company/${id}`);
    }

    deleteCompanyById(id: number){
        return this.http.delete(`http://localhost:3000/api/company/${id}`);
    }

}
