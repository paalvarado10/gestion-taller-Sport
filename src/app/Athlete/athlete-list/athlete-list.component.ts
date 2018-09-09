import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AthleteService } from '../athlete.service';
import { Athlete } from '../athlete';

@Component({
    selector: 'app-athlete',
    templateUrl: './athlete-list.component.html',
    styleUrls: ['./athlete-list.component.css']
})

export class AthleteListComponent implements OnInit{
	constructor(
		private athleteService: AthleteService,
		private toastrService: ToastrService
				){ }

	athletes: Athlete[];

	getAthletes(): void {
		this.athleteService.getAthletes()
		.subscribe(athletes => {
			this.athletes = athletes;
		}, err => {
			this.toastrService.error(err, "Error");
		});
	}

	ngOnInit() {
		this.getAthletes();
	}
}