import { Component, Input } from '@angular/core';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({

    selector: 'app-property-card',
    //template: '<h1>This is my card!</h1>',
    templateUrl: 'property-card.component.html',
    //styles: ['h1 {font-weight: normal;}']
    styleUrls: ['property-card.component.css']


})

export class PropertycardComponent
{   
    @Input() property : IPropertyBase;
    @Input() hideIcons: boolean;

}