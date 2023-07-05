import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../interfaces/company';

@Component({
    selector: 'app-company-detail',
    templateUrl: './company-detail.component.html',
    styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit {

    company?: Company;

    constructor(private route: ActivatedRoute,
                private companyService: CompanyService,
                private router: Router) {
        this.route.params.subscribe({
            next: (params) => {
                console.log(params);
                this.companyService.getCompanyById(params['id']).subscribe({
                    next: (company) => {
                        console.log(company);
                        this.company = company;
                    }
                });
            }
        });
    }

    ngOnInit() {
    }

    delete() {
        this.companyService.deleteCompanyById(this.company!.id).subscribe({
            next: (company) => {
                console.log(company);
                this.router.navigate(['/companies']);
            }
        });
    }
}
