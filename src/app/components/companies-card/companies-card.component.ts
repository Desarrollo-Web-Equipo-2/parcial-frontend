import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company';
import { Router } from '@angular/router';

@Component({
    selector: 'app-companies-card',
    templateUrl: './companies-card.component.html',
    styleUrls: ['./companies-card.component.scss'],
})
export class CompaniesCardComponent {

    @Input() company!: Company;

    constructor(private router: Router) {
    }


    details() {
        console.log('details')
        this.router.navigate(['/companies', this.company.id]);
    }
}
