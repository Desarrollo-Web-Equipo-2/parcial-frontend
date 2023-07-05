import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company';

@Component({
    selector: 'app-companies-card',
    templateUrl: './companies-card.component.html',
    styleUrls: ['./companies-card.component.scss'],
})
export class CompaniesCardComponent {

    @Input() company!: Company;

    constructor() {
    }


}
