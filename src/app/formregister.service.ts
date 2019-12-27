import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormregisterService {

  constructor(private http: HttpClient) {
    this.getCalData();
    this.getBatchData();
  }

  percentDone = null;
  uploadSuccess = false;
  barchartdata:any=[];
  studentdetails:any=[];

  url: string = "http://localhost:8086/batchinformation/batch";

  calenderurl: string = "http://localhost:8086/calender/calender";

  uploadurl: string = "http://localhost:8086/Upload";

  postData(data) {
    return this.http.post(`${this.url}`, data);
  }

  getBatchData(){
    return this.http.get(`${this.url}`);
  }

  postCalData(caldata) {
    return this.http.post(`${this.calenderurl}`, caldata);
  }

  getCalData() {
    return this.http.get(`${this.calenderurl}`)
  }

  postupload(file) {
    return this.http.post(`${this.uploadurl}/uploaddoc`,file)
  }

  getStudentData(){
    return this.http.get(`${this.uploadurl}/Studentdetails`);
  }
}
