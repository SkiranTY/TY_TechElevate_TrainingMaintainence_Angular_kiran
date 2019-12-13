import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import { FormregisterService } from '../formregister.service';
import { SchedulerComponent } from '../scheduler/scheduler.component';
import { Model } from 'fullcalendar';
//import moment = require('moment');

@Component({
	selector: 'app-calender',
	templateUrl: './calender.component.html',
	styleUrls: ['./calender.component.css']
})

export class CalenderComponent implements OnInit {

	constructor(private service: FormregisterService) { this.getdata() }

	//@Input() schedule: SchedulerComponent

	evenetdata: any= [];
	caldata: any = [];
	getdata() {
		this.service.getCalData().subscribe(data => {
			//console.log(data);
			this.caldata = data;
			console.log(this.caldata);
			//console.log(Array.isArray(this.caldata))
			this.caldata.map(eve => {
				this.evenetdata.push({
					title: eve.technology,
					start: eve.eventStartDate,
					end: eve.eventEndDate
				})
				console.log(Array.isArray(this.evenetdata))
			})
			console.log('Events', this.evenetdata)
		}, err => {
			console.log(err);
		}, () => {
			console.log("got the data");
		})
	}



	getcalender() {
		$('#calendar').fullCalendar({

			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},

			defaultDate: '2019-12-01',
			editable: true,
			eventLimit: true, // allow "more" link when too many events

			events:
			[
			{
				title: 'java',
				start: '2019-12-01T10:00:00',
				end: '2019-12-25T09:00:00'

			},
			]

		});
	}

	myfunction(){
	
	}
	async ngOnInit() {
		this.getdata();
		this.getcalender();
	}

}