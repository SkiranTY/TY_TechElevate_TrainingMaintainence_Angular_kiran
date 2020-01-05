import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BatchdetailsComponent } from 'Angular git/src/app/batchdetails/batchdetails.component';


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
  piechartdata:any=[];
  batchstatus:any=[];

  
  url: string = "http://localhost:8086/batchinformation";

  calenderurl: string = "http://localhost:8086/calender/calender";

  uploadurl: string = "http://localhost:8086/Upload";

  postData(data) {
    return this.http.post(`${this.url}/batch`, data);
  }

  getBatchData(){
    return this.http.get(`${this.url}/batch`);
  }

  gettechnology(){
    return this.http.get(`${this.url}/gettechnology`);
  }

  getbatchstatus(){
    return this.http.get(`${this.url}/getbydate`);
  }

  postCalData(caldata) {
    return this.http.post(`${this.calenderurl}`, caldata);
  }

  getCalData() {
    return this.http.get(`${this.calenderurl}`)
  }
  code:any=[];
  postupload(data) {
    this.http.post(`${this.url}`,data).subscribe(res=>{
      console.log(res)
      this.code=res
      console.log(this.code.batchinfo.batchcode)
    })
    return this.http.post(`${this.uploadurl}/uploaddoc/this.code.batchinfo.batchcode`,data)
  }

  getStudentData(){
    return this.http.get(`${this.uploadurl}/Studentdetails`);
  }
}
