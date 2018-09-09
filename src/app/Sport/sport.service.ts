import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Sport} from './sport';
import {HttpClient} from '@angular/common/http';

const API_URL = "../../assets/";
const sports ="/sports.json";

@Injectable()

export class SportService {
	constructor (private http: HttpClient){}

	getBooks(): Observable<Sport[]>{
		return this.http.get<Sport[]>(API_URL + sports);
	}
}