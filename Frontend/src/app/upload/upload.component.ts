import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Observable, Observer } from 'rxjs';
import { UploadService } from './upload.service';
import {GetVariableService} from '../property/getVariable.service';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';
import * as fs from 'node_modules/fs-web';
//import * as util from 'util';

declare function test(): any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {

//   fileSelected: any = null;
//   config = {
//     bucketName: 'cfe2',
//    // dirName: 'test', /* optional - when use: e.g BUCKET_ROOT/dirName/fileName.extesion */
//     region: 'ap-south-1',
//     accessKeyId: "PPZKY8RRD9KGPILJ3EMJ",
//     secretAccessKey: "1MingwheBUoF8CWhrW3eNAizNTmrxiPdB0kzXglc",
//     s3Url: 'https://cfe2.ap-south-1.linodeobjects.com/'
//   }
//   S3CustomClient: AWSS3UploadAshClient = new AWSS3UploadAshClient(this.config);

// constructor() { }

  //  ngOnInit() {
  //   test();
  //  }

//   onChangeFile(event: any) {
//     console.log(event.target.files[0])
//     this.fileSelected = event.target.files[0]
//   }

//   async handleSendFile() {
//     console.log("handleSendFile")
//     await this.S3CustomClient
//       .uploadFile(this.fileSelected, this.fileSelected.type, undefined,
//         this.fileSelected.name, "public-read")
//       .then((data: UploadResponse) => console.log(data))
//       .catch((err: any) => console.error(err))
//   }
  
}