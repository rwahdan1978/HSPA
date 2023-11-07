import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import {GetVariableService} from '../property/getVariable.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private http: HttpClient, private getVariable: GetVariableService) {}

  theFileName1: any;
  theFileName2: any;
  theFileName3: any;
  theFileName4: any;
  theFileName5: any;
  allfiles: Array<string> = [];

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

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          this.allfiles.push(droppedFile.relativePath);

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }

      this.getVariable.theFileName1 = this.allfiles[0];
      this.getVariable.theFileName2 = this.allfiles[1];
      this.getVariable.theFileName3 = this.allfiles[2];
      this.getVariable.theFileName4 = this.allfiles[3];
      this.getVariable.theFileName5 = this.allfiles[4];


    }
  }

  public fileOver(event:any){
    console.log(event);
  }

  public fileLeave(event:any){
    console.log(event);
  }
}