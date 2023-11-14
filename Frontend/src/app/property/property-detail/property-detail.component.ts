import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})

export class PropertyDetailComponent implements OnInit {

public propertyId: number;
property: any = new Property();

  http: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp'];
      }
    );
  }

  showImage(image:any){
    
    let myImage1 = <HTMLElement> document.getElementById("image1"),
    style = myImage1?.style || window.getComputedStyle(myImage1, "false"),
    bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    //console.log(bi);
    window.open(bi,"_blank");
  }

  showImage2(image:any){
    
    let myImage1 = <HTMLElement> document.getElementById("image2"),
    style = myImage1?.style || window.getComputedStyle(myImage1, "false"),
    bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    //console.log(bi);
    window.open(bi,"_blank");
  }

  showImage3(image:any){
    
    let myImage1 = <HTMLElement> document.getElementById("image3"),
    style = myImage1?.style || window.getComputedStyle(myImage1, "false"),
    bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    //console.log(bi);
    window.open(bi,"_blank");
  }

  showImage4(image:any){
    
    let myImage1 = <HTMLElement> document.getElementById("image4"),
    style = myImage1?.style || window.getComputedStyle(myImage1, "false"),
    bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    //console.log(bi);
    window.open(bi,"_blank");
  }

  showImage5(image:any){
    
    let myImage1 = <HTMLElement> document.getElementById("image5"),
    style = myImage1?.style || window.getComputedStyle(myImage1, "false"),
    bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    //console.log(bi);
    window.open(bi,"_blank");
  }
    
}