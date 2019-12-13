import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormregisterService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8086/batchinformation/batch";
  calenderurl: string = "http://localhost:8086/calender/calender";

  postData(data) {
    return this.http.post(`${this.url}`, data);
  }

  postCalData(caldata) {
    return this.http.post(`${this.calenderurl}`, caldata);
  }

  getCalData(){
    return this.http.get(`${this.calenderurl}`).pipe(map(data=>{
      let newArr = [];
      for(let i in data){
        newArr.push({...data[i], id:i});
      }
      return newArr;
    }))
  }
}
