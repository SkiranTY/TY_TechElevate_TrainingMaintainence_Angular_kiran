import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import { FormregisterService } from '../formregister.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
	selector: 'app-calender',
	templateUrl: './calender.component.html',
	styleUrls: ['./calender.component.css']
})

export class CalenderComponent implements OnInit {
	

	constructor(private service: FormregisterService) {  }


	actualData: any = [];
	calendarData: any = [];

	getCalendarEvent() {
		this.service.getCalData().subscribe(data => {
			this.calendarData = data;
			console.log(this.calendarData);
			this.calendarData.map(eve => {
				this.actualData.push({
					start : eve.eventStartDate,
					end : eve.eventEndDate,
					title : eve.technology,
					// fromTime:eve.fromTime,
					// toTime : eve.toTime,
				
				}) 
			})
			console.log('Events ',this.actualData)
		}, err => {
			console.log(err)
		}, () => {
			console.log("data get Successfully")
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

			events:this.actualData
			// [
			// {
			// 	title: 'java',
			// 	start: '2019-12-01T10:00:00',
			// 	end: '2019-12-25T09:00:00'

			// },
			// ]

		});
	}


	async ngOnInit() {
		this.getcalender();
		this.getCalendarEvent();
		
	}

	print()  {  
    var data = document.getElementById('calendar');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 200;   
      var pageHeight = 220;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
	  var heightLeft = imgHeight; 
	  var calendername= this.getcalender
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('cal.pdf'); // Generated PDF   
    });  
  }  
}