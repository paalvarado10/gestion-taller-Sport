import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AthleteService } from '../athlete.service';

import { Athlete } from '../athlete';
import { Sport } from '../../sport/sport';

@Component({
    selector: 'app-athlete-detail',
    templateUrl: './athlete-detail.component.html',
    styleUrls: ['./athlete-detail.component.css']
})
export class AthleteDetailComponent implements OnInit {

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the sport to be shown
    * @param athleteService The athlete's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private athleteService: AthleteService,
        private toastrService: ToastrService
    ) { }

    /**
    * The athlete
    */
    athlete: Athlete;

    /**
    * The athlete
    */
    athlete_sports: Sport[];

    /**
    * The athlete's id that we will pass to the sport list component
    * to show the athlete's sports
    */
    athlete_id: number;

    /**
    * The method which obtains the athlete whose details we want to show
    */
    getAthlete(): void {
        this.athleteService.getAthlete(this.athlete_id)
            .subscribe(athlete => {
                this.athlete = athlete
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * This method retrieves the sports of the athlete
    */
    getSportsByAthlete(): void {
        this.athleteService.getSportsOfAthlete(this.athlete_id)
            .subscribe(sports => {
                this.athlete_sports = sports
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }

    /**
    * The method which initializes the component.
    * We need to create the athlete so it is never considered as undefined
    */
    ngOnInit() {
        this.athlete_id = +this.route.snapshot.paramMap.get('id');
        this.athlete = new Athlete();
        this.getAthlete();
        this.getSportsByAthlete();
    }

}