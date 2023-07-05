import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent {

    companies: Company[] = [];

    constructor(private companiesService: CompanyService) {
        // this.companiesService.getCompanies().subscribe({
        //     next: (companies) => {
        //         this.companies = companies;
        //     },
        //     error: (error) => {
        //         console.log(error);
        //     }
        // });
        this.companies.push({
            id: 1,
            userId: 1,
            name: 'Empresa 1',
            url: 'https://www.google.com',
            notes: 'Nice company'
        } as Company,
            {
                id: 2,
                userId: 1,
                name: 'Empresa 2',
                url: 'https://www.google.com',
                notes: 'Nice company 2'
            } as Company);
    }


}
