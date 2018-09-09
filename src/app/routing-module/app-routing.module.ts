import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SportListComponent} from '../sport/sport-list/sport-list.component';

const routes: Routes =[
	{
		path: 'sports',
		children: [
		{
			path: 'List',
			component: SportListComponent
		}]
	},
	/*{
		path: 'athletes',
		children: [
		{
			path: 'List',
			component: AthleteListComponent
		}]
	}*/
];

@NgModule({
	imports: [
	CommonModule,
	RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutingModule{
	
}