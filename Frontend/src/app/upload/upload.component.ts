import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import {GetVariableService} from '../property/getVariable.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Observable, Observer } from 'rxjs';

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
  base64Image: any;
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

          const dlink: HTMLAnchorElement = document.createElement('a');
          dlink.download = droppedFile.relativePath; // the file name
          dlink.href = ".jpg, .jpeg, .png", droppedFile.relativePath;
          dlink.download = droppedFile.relativePath;
          document.body.appendChild(dlink);
          dlink.click(); // this will trigger the dialog window
          dlink.remove();

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

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      const img: HTMLImageElement = new Image();
      img.crossOrigin = "Anonymous";
      img.src = url;
      if (!img.complete) {
        console.log(this.getBase64Image(img));
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = err => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        console.log(this.getBase64Image(img));
        observer.complete();
      }
    });

  }

  getBase64Image(img: HTMLImageElement) {
    console.log(this.getBase64Image(img));
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const dataURL: string = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

}