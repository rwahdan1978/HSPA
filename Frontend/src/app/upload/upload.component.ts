import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Observable, Observer } from 'rxjs';
import { UploadService } from './upload.service';
import {GetVariableService} from '../property/getVariable.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {

  shortLink: string = "";
  
  loading: boolean = false;
  file!:File;
  theFileName1: any;
  theFileName2: any;
  theFileName3: any;
  theFileName4: any;
  theFileName5: any;
  theFileName6: any;

  files: Array<any> = [];

  // put below equals this.files[0 or 1 or ...]

  setText1(theFileName1: string) {
    this.getVariable.theFileName1 = this.theFileName1;
  }

  setText2(theFileName2: string) {
    this.getVariable.theFileName2 = this.theFileName2;
  }

  setText3(theFileName3: string) {
    this.getVariable.theFileName3 = this.theFileName3;
  }

  setText4(theFileName4: string) {
    this.getVariable.theFileName4 = this.theFileName4;
  }

  setText5(theFileName5: string) {
    this.getVariable.theFileName5 = this.theFileName5;
  }

  setText6(theFileName6: string) {
    this.getVariable.theFileName6 = this.theFileName6;
  }
  
  constructor(private fileService: UploadService,
                      private getVariable: GetVariableService) {}

  onChange1(event:any){
    this.file = event.target.files[0];
    this.getVariable.theFileName1 = event.target.files[0].name;
  }

  onChange2(event:any){
    this.file = event.target.files[0];
    this.getVariable.theFileName2 = event.target.files[0].name;
  }

  onChange3(event:any){
    this.file = event.target.files[0];
    this.getVariable.theFileName3 = event.target.files[0].name;
  }

  onChange4(event:any){
    this.file = event.target.files[0];
    this.getVariable.theFileName4 = event.target.files[0].name;
  }

  onChange5(event:any){
    this.file = event.target.files[0];
    this.getVariable.theFileName5 = event.target.files[0].name;
  }

  onChange6(event:any){
    this.file = event.target.files[0];
    this.getVariable.theFileName6 = event.target.files[0].name;
  }

  onUploadImage1(){
    this.loading = !this.loading;

    this.fileService.upload(this.file).subscribe((event:any)=>{
      if (typeof (event) === "object"){
        this.shortLink = event.link;
        this.loading = false;
        this.files.push(event.link);
      }     
      
      let myInput1 = <HTMLElement>document.getElementById("image1");
      myInput1.setAttribute("disabled","disabled");
      let myButton1 = <HTMLElement>document.getElementById("button1");
      myButton1.setAttribute("disabled","disabled");

      let myInput2 = <HTMLElement>document.getElementById("image2");
      myInput2.removeAttribute("disabled");
      let myButton2 = <HTMLElement>document.getElementById("button2");
      myButton2.removeAttribute("disabled");

    });
  }

  onUploadImage2(){
    this.loading = !this.loading;

    this.fileService.upload(this.file).subscribe((event:any)=>{
      if (typeof (event) === "object"){
        this.shortLink = event.link;
        this.loading = false;
        this.files.push(event.link);
      }     

      let myInput2_1 = <HTMLElement>document.getElementById("image2");
      myInput2_1.setAttribute("disabled","disabled");
      let myButton2_1 = <HTMLElement>document.getElementById("button2");
      myButton2_1.setAttribute("disabled","disabled");

      let myInput3 = <HTMLElement>document.getElementById("image3");
      myInput3.removeAttribute("disabled");
      let myButton3 = <HTMLElement>document.getElementById("button3");
      myButton3.removeAttribute("disabled");

    });
  }

  onUploadImage3(){
    this.loading = !this.loading;

    this.fileService.upload(this.file).subscribe((event:any)=>{
      if (typeof (event) === "object"){
        this.shortLink = event.link;
        this.loading = false;
        this.files.push(event.link);
      }     

      let myInput3_1 = <HTMLElement>document.getElementById("image3");
      myInput3_1.setAttribute("disabled","disabled");
      let myButton3_1 = <HTMLElement>document.getElementById("button3");
      myButton3_1.setAttribute("disabled","disabled");

      let myInput4 = <HTMLElement>document.getElementById("image4");
      myInput4.removeAttribute("disabled");
      let myButton4 = <HTMLElement>document.getElementById("button4");
      myButton4.removeAttribute("disabled");

    });
  }

  onUploadImage4(){
    this.loading = !this.loading;

    this.fileService.upload(this.file).subscribe((event:any)=>{
      if (typeof (event) === "object"){
        this.shortLink = event.link;
        this.loading = false;
        this.files.push(event.link);
      }     

      let myInput4_1 = <HTMLElement>document.getElementById("image4");
      myInput4_1.setAttribute("disabled","disabled");
      let myButton4_1 = <HTMLElement>document.getElementById("button4");
      myButton4_1.setAttribute("disabled","disabled");

      let myInput5 = <HTMLElement>document.getElementById("image5");
      myInput5.removeAttribute("disabled");
      let myButton5 = <HTMLElement>document.getElementById("button5");
      myButton5.removeAttribute("disabled");

    });
  }

  onUploadImage5(){
    this.loading = !this.loading;

    this.fileService.upload(this.file).subscribe((event:any)=>{
      if (typeof (event) === "object"){
        this.shortLink = event.link;
        this.loading = false;
        this.files.push(event.link);
      }     
      let myInput5_1 = <HTMLElement>document.getElementById("image5");
      myInput5_1.setAttribute("disabled","disabled");
      let myButton5_1 = <HTMLElement>document.getElementById("button5");
      myButton5_1.setAttribute("disabled","disabled");

      let myInput6 = <HTMLElement>document.getElementById("image6");
      myInput6.removeAttribute("disabled");
      let myButton6 = <HTMLElement>document.getElementById("button6");
      myButton6.removeAttribute("disabled");
    });
    console.log(this.files)
  }

  onUploadImage6(){
    this.loading = !this.loading;

    this.fileService.upload(this.file).subscribe((event:any)=>{
      if (typeof (event) === "object"){
        this.shortLink = event.link;
        this.loading = false;
        this.files.push(event.link);
      }     
      let myInput6_1 = <HTMLElement>document.getElementById("image6");
      myInput6_1.setAttribute("disabled","disabled");
      let myButton6_1 = <HTMLElement>document.getElementById("button6");
      myButton6_1.setAttribute("disabled","disabled");
    });
    console.log(this.files)
  }
}