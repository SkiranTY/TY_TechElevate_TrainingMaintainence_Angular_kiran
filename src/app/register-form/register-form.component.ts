import { Component, OnInit } from '@angular/core';
import { FormregisterService } from '../formregister.service';
import { dataLoader } from '@amcharts/amcharts4/core';

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

  reg(data) {
    this.service.postData(data.value).subscribe(res=>{
      console.log(res);
      this.formdata=res;
    },err=>{
      console.log(err);
    })
    this.onSubmit();
  }

  onSubmit() { 
    const formData = new FormData(); 
    formData.append('file', this.images); 
    this.service.postupload(formData).subscribe(res => {
    console.log(res)
    },(err) => {
    console.log(err)
    }
    )};
 
  ngOnInit() {
  }

}