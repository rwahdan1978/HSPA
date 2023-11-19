import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})

export class PropertyDetailComponent implements OnInit {

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: '',
  });

  public propertyId: number;
  property: any = new Property();
  theArray: Array<any> = [];
  likes: number;
  propid: number;
  propidStr: string;
  submitted: any;

    http: any;
    clicked = false;

    visable1: boolean = false;
    visable2: boolean = true;
    currentTabId = 0;
    token: any;

  constructor(private route: ActivatedRoute, private alert: AlertifyService,
                            private fb: FormBuilder) {}

  ngOnInit() {

    this.form.controls['subject'].disable();
    this.token = localStorage.getItem('token');
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp'];
      }
    )

    this.propid = this.propertyId;
    this.propidStr = "nums" + this.propid.toString()

    
       let data2:any = localStorage.getItem(this.propidStr);
       this.likes = JSON.parse(data2);
     
  }

  showImage(){
    this.visable1 = true;
    this.visable2 = false;
  }

  hideImage(){
    this.visable1 = false;
    this.visable2 = true;
    this.currentTabId = 2;
  } 

  addLike(element:any){

    this.propidStr = "nums" + this.propid.toString()
    
      this.likes += 1;
      let data = element.textContent = this.likes;
      localStorage.setItem(this.propidStr,JSON.stringify(data));
      location.reload();
    
  }

  goContacts(){
    this.currentTabId = 3
  }

  async send(){

    setTimeout(()=>
    {
      this.clicked = true;
      
    }, 100);

    emailjs.init("IclaYU2yrPjG2MHfm");
    let response = await emailjs.send("service_ytxrv42","template_6j13ark",{
      to_name: "Admin",
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      subject: this.property.Name,
      message: this.form.value.message,
      });

      this.alert.success("email sent");
      window.location.reload();
      
  }

}