import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({

    selector: 'app-property-card',
    //template: '<h1>This is my card!</h1>',
    templateUrl: 'property-card.component.html',
    //styles: ['h1 {font-weight: normal;}']
    styleUrls: ['property-card.component.css']


})

export class PropertycardComponent implements OnInit
{   
    deviveInfo: DeviceInfo;
    @Input() property : IPropertyBase;
    @Input() hideIcons: boolean;

    constructor(private DDS: DeviceDetectorService) { }

    ngOnInit() {
        this.deviveInfo = this.DDS.getDeviceInfo();
      }
}