import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormregisterService {

  constructor(private http: HttpClient) {
    this.getCalData()
  }

  percentDone = null;
  uploadSuccess = false;

  url: string = "http://localhost:8086/batchinformation/batch";

  calenderurl: string = "http://localhost:8086/calender/calender";

  uploadurl: string = "http://localhost:8086/Upload/uploaddoc";

  postData(data) {
    return this.http.post(`${this.url}`, data);
  }

  postCalData(caldata) {
    return this.http.post(`${this.calenderurl}`, caldata);
  }

  getCalData() {
    return this.http.get(`${this.calenderurl}`)
  }

  postupload(file) {
    return this.http.post(`${this.uploadurl}`,file)
  }
}
