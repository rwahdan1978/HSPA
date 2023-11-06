import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import {GetVariableService} from '../property/getVariable.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  public message1: string;
  public progress1: number;
  public message2: string;
  public progress2: number;
  public message3: string;
  public progress3: number;
  public message4: string;
  public progress4: number;
  public message5: string;
  public progress5: number;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient, private getVariable: GetVariableService) {}

  ngOnInit(){

  }

  setText1(theFileName1: string) {
    this.getVariable.theFileName1 = theFileName1;
  }

  setText2(theFileName2: string) {
    this.getVariable.theFileName2 = theFileName2;
  }

  setText3(theFileName3: string) {
    this.getVariable.theFileName3 = theFileName3;
  }

  setText4(theFileName4: string) {
    this.getVariable.theFileName4 = theFileName4;
  }

  setText5(theFileName5: string) {
    this.getVariable.theFileName5 = theFileName5;
  }

  public uploadFile1 = (files:any) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.getVariable.theFileName1 = fileToUpload.name;
    this.http.post('https://localhost:5001/api/upload', 
                        formData, {reportProgress:true, observe: 'events'})
                        .subscribe(event =>
                          {
                            if (event.type === HttpEventType.UploadProgress){
                              this.progress1 = Math.round(100 * event.loaded / event.total);
                            }
                            else if (event.type === HttpEventType.Response){
                              this.message1 = "Upload is success";
                              this.onUploadFinished.emit(event.body);
                            }
                          });

  }

  public uploadFile2 = (files:any) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.getVariable.theFileName2 = fileToUpload.name;
    this.http.post('https://localhost:5001/api/upload', 
                        formData, {reportProgress:true, observe: 'events'})
                        .subscribe(event =>
                          {
                            if (event.type === HttpEventType.UploadProgress){
                              this.progress2 = Math.round(100 * event.loaded / event.total);
                            }
                            else if (event.type === HttpEventType.Response){
                              this.message2 = "Upload is success";
                              this.onUploadFinished.emit(event.body);
                            }
                          });

  }

  public uploadFile3 = (files:any) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.getVariable.theFileName3 = fileToUpload.name;
    this.http.post('https://localhost:5001/api/upload', 
                        formData, {reportProgress:true, observe: 'events'})
                        .subscribe(event =>
                          {
                            if (event.type === HttpEventType.UploadProgress){
                              this.progress3 = Math.round(100 * event.loaded / event.total);
                            }
                            else if (event.type === HttpEventType.Response){
                              this.message3 = "Upload is success";
                              this.onUploadFinished.emit(event.body);
                            }
                          });

  }

  public uploadFile4 = (files:any) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.getVariable.theFileName4 = fileToUpload.name;
    this.http.post('https://localhost:5001/api/upload', 
                        formData, {reportProgress:true, observe: 'events'})
                        .subscribe(event =>
                          {
                            if (event.type === HttpEventType.UploadProgress){
                              this.progress4 = Math.round(100 * event.loaded / event.total);
                            }
                            else if (event.type === HttpEventType.Response){
                              this.message4 = "Upload is success";
                              this.onUploadFinished.emit(event.body);
                            }
                          });

  }

  public uploadFile5 = (files:any) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.getVariable.theFileName5 = fileToUpload.name;
    this.http.post('https://localhost:5001/api/upload', 
                        formData, {reportProgress:true, observe: 'events'})
                        .subscribe(event =>
                          {
                            if (event.type === HttpEventType.UploadProgress){
                              this.progress5 = Math.round(100 * event.loaded / event.total);
                            }
                            else if (event.type === HttpEventType.Response){
                              this.message5 = "Upload is success";
                              this.onUploadFinished.emit(event.body);
                            }
                          });

  }

}
