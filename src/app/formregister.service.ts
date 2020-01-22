import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormregisterService {
  homeworld: Observable<{}>;
  constructor(private http: HttpClient) {
    this.getCalData();
    this.getBatchData();
  }

  percentDone = null;
  uploadSuccess = false;
  barchartdata: any = [];
  studentdetails: any = [];
  piechartdata: any = [];
  batchstatus: any = [];
  actualData: any = [];
  OngoingBatch: any = [];
  YetToStart: any = [];
  freebatchpiedata: any = [];

  url: string = "http://localhost:8086/batchinformation";

  calenderurl: string = "http://localhost:8086/calender/calender";

  uploadurl: string = "http://localhost:8086/Upload";

  postData(data) {
    return this.http.post(`${this.url}/batch`, data);
  }

  getBatchData() {
    return this.http.get(`${this.url}/batch`);
  }

  gettechnology() {
    return this.http.get(`${this.url}/gettechnology`);
  }

  getbatchstatus() {
    return this.http.get(`${this.url}/getbycompleted`);
  }

  getOngoingBatch() {
    return this.http.get(`${this.url}/getbyongoing`);
  }

  getYetTostart() {
    return this.http.get(`${this.url}/getbyTostart`);
  }

  getFreeBatches() {
    return this.http.get(`${this.url}/freebatches`);
  }

  postCalData(caldata) {
    return this.http.post(`${this.calenderurl}`, caldata);
  }

  getCalData() {
    return this.http.get(`${this.calenderurl}`)
  }

  code: any = [];
  postupload(data) {
    return this.http.post(`${this.uploadurl}/uploaddoc/tytech`, data)

  }

  // postupload(data){
  // this.homeworld = this.http.get(`${this.url}/batch`,data).pipe(
  //   mergeMap(character => this.http.get(`${this.uploadurl}/uploaddoc/${character.batchinfo.batchcode}`,data))
  // );
  // }
  getStudentData() {
    return this.http.get(`${this.uploadurl}/Studentdetails`);
  }
}
