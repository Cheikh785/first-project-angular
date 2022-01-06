import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
	
	isAuth = false;

	lastUpdate = new Date();

	appareils: any;

	appareilSubscription?: Subscription;

	constructor(private appareilService : AppareilService) {	
		setTimeout(
			() => {
				this.isAuth=true;
			}, 4000
		);
		this.appareils=[];
	} 

	ngOnInit() {
		this.appareils = this.appareilService.appareilSubject.subscribe(
			(appareils: any[]) => {
				this.appareils = appareils;
			}
		)
		this.onFetch();
	}
	
	onAllumer() {
		this.appareilService.switchOnAll();
	}

	onEteindre() {
		this.appareilService.switchOffAll();
	}

	onSave() {
		this.appareilService.saveAppareilToServer();
	}

	onFetch() {
		this.appareilService.getAppareilsFromServer();
	} 

}
