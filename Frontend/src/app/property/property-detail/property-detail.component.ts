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
propid: number;
propidStr: string;

  http: any;

  visable1: boolean = false;
  visable2: boolean = true;
  currentTabId = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property = data['prp'];
      }
    )

    this.propid = this.propertyId;
    this.propidStr = "nums" + this.propid.toString()

    
       let data2:any = localStorage.getItem(this.propidStr);
       this.likes = JSON.parse(data2);
     
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

    this.propidStr = "nums" + this.propid.toString()
    
      this.likes += 1;
      let data = element.textContent = this.likes;
      localStorage.setItem(this.propidStr,JSON.stringify(data));
      location.reload();
    
  }

  goContacts(){
    this.currentTabId = 3
  }

}