import { Component } from '@angular/core';

@Component({

    selector: 'app-property-card',
    //template: '<h1>This is my card!</h1>',
    templateUrl: 'property-card.component.html',
    //styles: ['h1 {font-weight: normal;}']
    styleUrls: ['property-card.component.css']


})

export class PropertycardComponent
{
    Property: any = {
        "id":1,
        "Name": "Rami Wahdan",
        "Type":"House",
        "Price": 120000
    }

    Property2: any = {
        "id":1,
        "Name": "Fatima Habib",
        "Type":"House",
        "Price": 150000
    }


}