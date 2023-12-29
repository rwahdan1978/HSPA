import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

constructor(private http: HttpClient) { }

imageUpload(imageForm: FormData) {
  console.log('image uploading');
  return this.http.post('https://nodejs-20pl.onrender.com:3000/upload/', imageForm);
 }
}
