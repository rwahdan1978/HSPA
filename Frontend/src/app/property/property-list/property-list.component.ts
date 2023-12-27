import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit{
  public SellRent = 0;
  properties: IPropertyBase[];
  City ='';
  SearchCity = '';
  Prop = '';
  SearchProp = '';
  SortbyParam = '';
  SearchCar = '';
  SortDirection = 'asc';

  constructor(private route: ActivatedRoute, private housingService: HousingService) {}

  ngOnInit(): void{

      if (this.route.snapshot.url.toString()==="buy-property"){
        this.SellRent = 1;
      }if (this.route.snapshot.url.toString()==="rent-property"){
        this.SellRent = 2;
      }
  
        this.housingService.getAllProperties(this.SellRent).subscribe(
          data=> {
                this.properties = data;
          }, error => {
            console.log(error);
          }
        );
  }
 
  onCityFilter(){
    this.SearchCity = this.City;
  }

  ClearList(){
    this.SearchCity = '';
    this.City = '';
    this.SearchProp = '';
    this.Prop = '';
  }

  onCityFilterClear(){
    this.SearchCity = '';
    this.City = '';
    this.SearchProp = '';
    this.SearchCar = '';
    this.Prop = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

}
