import { formatDate } from '@angular/common';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  public message: string;
  public progress: number;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) {}

  ngOnInit(){

  }

  public uploadFile = (files:any) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('https://localhost:5001/api/upload', 
                        formData, {reportProgress:true, observe: 'events'})
                        .subscribe(event =>
                          {
                            if (event.type === HttpEventType.UploadProgress){
                              this.progress = Math.round(100 * event.loaded / event.total);
                            }
                            else if (event.type === HttpEventType.Response){
                              this.message = "Upload is success";
                              this.onUploadFinished.emit(event.body);
                            }
                          });

  }

}
