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

public imagepath: string;
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

  slides1 = [
    {img: "assets/images/1.png"},
    {img: "assets/images/2.png"},
    {img: "assets/images/3.png"},
    {img: "assets/images/4.png"},
    {img: "assets/images/5.png"},
    {img: "assets/images/6.png"},
    {img: "assets/images/7.png"}
  ];
    
}