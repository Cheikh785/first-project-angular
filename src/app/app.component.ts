import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

	secondes: number;
	counterSubscription?: Subscription;

	constructor() {
		this.secondes=0;
	}
	
	ngOnInit() {
		// const counter = interval(1000);
		// this.counterSubscription = counter.subscribe(
		// 	(value: number) => {
		// 		this.secondes = value;
		// 	}
		// )
		// counter.subscribe(
		// 	(value: number) => {
		// 		this.secondes = value;
		// 	},
		// 	(error: any) => {
		// 		console.log('Une erreur a été rencontrée !');
		// 	},
		// 	() => {
		// 		console.log('Observable complétée !');
		// 	}
		// )
	}

	ngOnDestroy() {
		this.counterSubscription?.unsubscribe();
	} 
}
