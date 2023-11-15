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

  showImage(image:String){
    
    let myImage1 = <HTMLElement> document.getElementById("image1"),
    style1 = myImage1?.style || window.getComputedStyle(myImage1, "false"),
    bi1 = style1.backgroundImage.slice(4, -1).replace(/"/g, "");
    window.open(bi1,"_blank");
  }

  showImage2(image:String){
    
    let myImage2 = <HTMLElement> document.getElementById("image2"),
    style = myImage2?.style || window.getComputedStyle(myImage2, "false"),
    bi2 = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    window.open(bi2,"_blank");
  }

  showImage3(image:String){
    
    let myImage3 = <HTMLElement> document.getElementById("image3"),
    style = myImage3?.style || window.getComputedStyle(myImage3, "false"),
    bi3 = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    window.open(bi3,"_blank");
  }

  showImage4(image:String){
    
    let myImage4 = <HTMLElement> document.getElementById("image4"),
    style = myImage4?.style || window.getComputedStyle(myImage4, "false"),
    bi4 = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    window.open(bi4,"_blank");
  }

  showImage5(image:String){
    
    let myImage5 = <HTMLElement> document.getElementById("image5"),
    style = myImage5?.style || window.getComputedStyle(myImage5, "false"),
    bi5 = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    window.open(bi5,"_blank");
  }
    
}