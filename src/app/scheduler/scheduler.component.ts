import { Component, OnInit } from '@angular/core';
import { FormregisterService } from '../formregister.service';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Calendar } from '../grid.model';


@Component({
	selector: 'app-scheduler',
	templateUrl: './scheduler.component.html',
	styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

	home = new Calendar()
	dataarray = [];
	constructor(private calservice: FormregisterService, private _fb: FormBuilder, private router: Router) { }


	name = 'schedule'

	allevents: any[]= [];

	addevent(form) {
		console.log(form.value);
		this.calservice.postCalData(form.value).subscribe(res => {
			console.log(res);
			console.log(typeof(res));
			form.reset();
		}, err => {
			console.log(err);
		}, () => {
			console.log('Event added successfully')
		})
		//this.router.navigateByUrl('/calender')

	}

	ngOnInit() {
		this.dataarray.push(this.home)
	}
	addForm() {
		this.home = new Calendar()
		this.dataarray.push(this.home)
	}
	delForm(index) {
		this.dataarray.splice(index)
	}

}