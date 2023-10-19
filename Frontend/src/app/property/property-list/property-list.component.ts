import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  
  properties: Array<any> = [
    {
      "id":1,
      "Name": "Rami Wahdan",
      "Type":"House",
      "Price": 1200000
    },

    {
      "id":2,
      "Name": "Fatima habib",
      "Type":"Villa",
      "Price": 1800000
    },

    {
      "id":3,
      "Name": "Ahmad Rami Wahdan",
      "Type":"Challete",
      "Price": 3500000
    },    

    {
      "id":4,
      "Name": "Shahed Rami Wahdan",
      "Type":"Building 5 Floors",
      "Price": 18000000
    },    

    {
      "id":5,
      "Name": "Taleen Rami Wahdan",
      "Type":"Villa",
      "Price": 9000000
    },    

    {
      "id":6,
      "Name": "Talya Rami Wahdan",
      "Type":"Motel",
      "Price": 5000000
    },

    {
      "id":7,
      "Name": "Rateel Rami Wahdan",
      "Type":"Farm",
      "Price": 3500000
    },    

]

}
