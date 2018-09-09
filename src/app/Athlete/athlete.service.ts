import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Athlete} from './athlete';
import {HttpClient} from '@angular/common/http';

const API_URL = "../../assets/";
const athletes ="/athletes.json";

@Injectable()

export class AthleteService {
	constructor (private http: HttpClient){}

	getBooks(): Observable<Athlete[]>{
		return this.http.get<Athlete[]>(API_URL + athletes);
	}
}