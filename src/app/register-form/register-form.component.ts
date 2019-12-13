import { Component, OnInit } from '@angular/core';
import { FormregisterService } from '../formregister.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private service: FormregisterService) { }

  formdata: any = [];

  reg(register) {
    console.log(register.value);
    this.service.postData(register.value).subscribe(res => {
      console.log(res);
      this.formdata = res;
      console.log(this.formdata);
    }, err => {
      console.log(err);
    }, () => {
      console.log("posted succssfully");
    })
  }

  ngOnInit() {
  }

}