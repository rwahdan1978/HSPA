import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare function test(): void;

@Component({
  selector: 'app-property-detail, appdemo',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})

export class PropertyDetailComponent implements OnInit {

public imagepath: string;
public propertyId: number;
property = new Property();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private housingService: HousingService) { }

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

  slides2 = [
    {img: "assets/images/5.png"},
    {img: "assets/images/6.png"},
    {img: "assets/images/7.png"},
    {img: "assets/images/1.png"},
    {img: "assets/images/2.png"},
    {img: "assets/images/3.png"},
    {img: "assets/images/4.png"}

  ];

  slideConfig = {"autoplay": true, "autoplaySpeed": 2500,
                "draggable": true,"infinite":true ,"pauseOnHover": false, 
                "dots": true, "arrows":true,
                "slidesToShow": 3, "slidesToScroll": 1};

 
    
  clicked(img:any){
    var img1 = document.getElementById('theimg');
    var magicEtherImage = new Image();
    magicEtherImage.src = img;
    var padding = 20;
    var winWidth = magicEtherImage.width + padding;
    var winHeight = magicEtherImage.height + padding;
    test();
  }
    
}