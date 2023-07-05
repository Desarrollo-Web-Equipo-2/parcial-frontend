import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../interfaces/person';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private http: HttpClient) {
    }

    createPerson(person: Person){
        return this.http.post('http://localhost:3000/api/person', {person});
    }

    getAllPersons(names?: string, surnames?: string){
        return this.http.get('http://localhost:3000/api/person', {params: {names: names ?? '',surnames: surnames ?? ''}});
    }

    getPersonById(id: number){
        return this.http.get(`http://localhost:3000/api/person/${id}`);

    }

    deletePersonById(id: number){
        return this.http.delete(`http://localhost:3000/api/person/${id}`);
    }




}
