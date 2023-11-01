import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-detail, appdemo',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})

export class PropertyDetailComponent implements OnInit {

public imagepath: string;
public propertyId: number;
property = new Property();

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

  slideConfig = {"initialSlide": 6,"autoplay": true, "autoplaySpeed": 3000, "arrows":true,
                "draggable": false,"infinite":true ,"pauseOnHover": false, 
                "dots": true, 'centerMode':true, "pauseOnFocus":false,
                "slidesToShow": 1, "slidesToScroll": 1};

  slides1 = [
    {img: "assets/images/1.png"},
    {img: "assets/images/2.png"},
    {img: "assets/images/3.png"},
    {img: "assets/images/4.png"},
    {img: "assets/images/5.png"},
    {img: "assets/images/6.png"},
    {img: "assets/images/7.png"}
  ];

  clicked(img:any){
    this.imagepath = img;
    window.open(this.imagepath, "_blank");
    return this.http.get(this.imagepath);
  }
    
}