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

  setText1(theFileName1: string) {
    this.getVariable.theFileName1 = theFileName1;
  }
  
  constructor(private fileService: UploadService,
                      private getVariable: GetVariableService) {}

  onChange(event:any){
    this.file = event.target.files[0];
    this.getVariable.theFileName1 = event.target.files[0].name;
  }

  onUpload(){
    this.loading = !this.loading;

    this.fileService.upload(this.file).subscribe((event:any)=>{
      if (typeof (event) === "object"){
        this.shortLink = event.link;
        this.loading = false;
      }     
    });

  }
}