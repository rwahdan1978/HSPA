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
theArray: Array<any> = [];

  http: any;

  visable1: boolean = false;
  visable2: boolean = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp'];
      }
    )
  }

  showImage(image:String){
    this.visable1 = true;
    this.visable2 = false;
  }

  hideImage(){
    this.visable1 = false;
    this.visable2 = true;
  }
    
}