import { Component, Input } from '@angular/core';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-person-card[person]',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent {

    @Input() person!: Person;

  constructor() { }

}
