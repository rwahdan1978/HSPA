import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})

export class PropertyDetailComponent implements OnInit {

  public urlPath: any;

  @ViewChild('iframe') iframe: ElementRef

  form: FormGroup = this.fb.group({
    from_name: [null, Validators.required],
    to_name: ['Admin', Validators.required],
    from_email: [null, Validators.required],
    subject: [null, Validators.required],
    message: [null, Validators.required],
  });

  public propertyId: number;
  property: any = new Property();
  theArray: Array<any> = [];
  likes: number;
  propid: number;
  propidStr: string;
  submitted: any;
  thetab: any;

    http: any;
    theButton: any;

    visable1: boolean = false;
    visable2: boolean = true;
    currentTabId = 0;
    token: any;
    dangerousUrl:any;
  
  constructor(private route: ActivatedRoute, private alert: AlertifyService, 
              private fb: FormBuilder, private sanitizer: DomSanitizer) {}

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

    setTimeout(() => {
      this.dangerousUrl = "https://www.google.com/maps?q=" + this.property.theaddress + "&output=embed";
      this.urlPath = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousUrl);
    }, 100);

    return this.urlPath;
     
  }

  showImage(){
    this.visable1 = true;
    this.visable2 = false;
    this.currentTabId = 2;
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
      window.location.reload();
    
  }

  async send(){

    if (this.form.valid)
    {
      this.theButton = document.getElementById("clickit");
      this.theButton.setAttribute("hidden",true);

      emailjs.init("IclaYU2yrPjG2MHfm");
      let response = await emailjs.send("service_ytxrv42","template_6j13ark",{
        to_name: "Admin",
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
        subject:  + ' located in ' + this.property.ProjectName + this.property.Name + "," + this.property.City,
        message: this.form.value.message,
        });

        this.alert.success("email sent");

        setTimeout(()=>
        {
          location.reload();     
        }, 1000);
      }    
      else
      {
        this.currentTabId = 3;
        this.alert.error("Please fill all fields!")
      }  
  }

}
