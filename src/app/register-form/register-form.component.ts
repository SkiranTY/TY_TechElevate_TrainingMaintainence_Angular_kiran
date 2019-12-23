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
  images;

  selectImage(event){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.images= file;
    }
  }

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

  onSubmit() { 
    const formData = new FormData(); 
     formData.append('file', this.images); 
    this.service.postupload(formData).subscribe((res) => 
    console.log(res), 
    (err) => 
    console.log(err)
    )};
 
  ngOnInit() {
  }

}