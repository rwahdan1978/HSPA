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
likes: number;

  http: any;

  visable1: boolean = false;
  visable2: boolean = true;
  currentTabId = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    let data2:any = localStorage.getItem('numLikes');
    this.likes = JSON.parse(data2);

    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp'];
      }
    )
  }

  showImage(){
    this.visable1 = true;
    this.visable2 = false;
  }

  hideImage(){
    this.visable1 = false;
    this.visable2 = true;
    this.currentTabId = 2;
  } 

  addLike(element:any){

    this.likes += 1;
    let data = element.textContent = this.likes;
    localStorage.setItem('numLikes',JSON.stringify(data));
    location.reload();
  }

}