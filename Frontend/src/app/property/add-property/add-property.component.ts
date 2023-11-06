import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { HousingService } from 'src/app/services/housing.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient } from '@angular/common/http';
import {GetVariableService} from '../getVariable.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('formTabs') formTabs: TabsetComponent;
  datePickerConfig: Partial<BsDatepickerConfig>;
  addPropertyForm: FormGroup;
  nextClicked: boolean;
  myDateValue: Date;
  property = new Property();

  // Will come from masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  propertyView: IPropertyBase = {
    Id: null as any,
    Name: '',
    Price: null as any,
    SellRent: null as any,
    PType: null as any,
    FType: null as any,
    BHK: null as any,
    BuiltArea: null as any,
    City: null as any,
    RTM: null as any
  };
  
  constructor(
    private fb: FormBuilder,
    private router: Router, private getVariable: GetVariableService,
    private housingService: HousingService,
    private alertify: AlertifyService, private http: HttpClient) 
    {
      this.datePickerConfig = Object.assign({},{customTodayClass: 'custom-today-class',
      containerClass: 'theme-dark-blue', dateInputFormat: 'DD-MM-YYYY', 
      showWeekNumbers:false,showTodayButton: true
    });

    }

  ngOnInit() {
    this.myDateValue = new Date();
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: ['1' , Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required]
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null],
      }),

      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this.fb.group({
        RTM: [null],
        PossessionOn: [null],
        AOP: [null, Validators.required],
        PA: [null,  Validators.required],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      }),

      PhotoInfo: this.fb.group({
        Image1: [null],
        Image2: [null],
        Image3: [null],
        Image4: [null],
        Image5: [null]
      }),
      

      });
  }

//#region <Getter Methods>
  // #region <FormGroups>
      get BasicInfo() {
        return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
      }

      get PriceInfo() {
        return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
      }

      get AddressInfo() {
        return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
      }

      get OtherInfo() {
        return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
      }

      get PhotoInfo() {
        return this.addPropertyForm.controls['PhotoInfo'] as FormGroup;
      }
  // #endregion

  //#region <Form Controls>
      get SellRent() {
        return this.BasicInfo.controls['SellRent'] as FormControl;
      }

      get BHK() {
        return this.BasicInfo.controls['BHK'] as FormControl;
      }

      get PType() {
        return this.BasicInfo.controls['PType'] as FormControl;
      }

      get FType() {
        return this.BasicInfo.controls['FType'] as FormControl;
      }

      get Name() {
        return this.BasicInfo.controls['Name'] as FormControl;
      }

      get City() {
        return this.BasicInfo.controls['City'] as FormControl;
      }

      get Price() {
        return this.PriceInfo.controls['Price'] as FormControl;
      }

      get BuiltArea() {
        return this.PriceInfo.controls['BuiltArea'] as FormControl;
      }

      get CarpetArea() {
        return this.PriceInfo.controls['CarpetArea'] as FormControl;
      }

      get Security() {
        return this.PriceInfo.controls['Security'] as FormControl;
      }

      get Maintenance() {
        return this.PriceInfo.controls['Maintenance'] as FormControl;
      }

      get FloorNo() {
        return this.AddressInfo.controls['FloorNo'] as FormControl;
      }

      get TotalFloor() {
        return this.AddressInfo.controls['TotalFloor'] as FormControl;
      }

      get Address() {
        return this.AddressInfo.controls['Address'] as FormControl;
      }

      get LandMark() {
        return this.AddressInfo.controls['LandMark'] as FormControl;
      }

      get RTM() {
        return this.OtherInfo.controls['RTM'] as FormControl;
      }

      get PossessionOn() {
        return this.OtherInfo.controls['PossessionOn'] as FormControl;
      }

      get AOP() {
        return this.OtherInfo.controls['AOP'] as FormControl;
      }

      get PA() {
        return this.OtherInfo.controls['PA'] as FormControl;
      }

      get Gated() {
        return this.OtherInfo.controls['Gated'] as FormControl;
      }

      get MainEntrance() {
        return this.OtherInfo.controls['MainEntrance'] as FormControl;
      }

      get Description() {
        return this.OtherInfo.controls['Description'] as FormControl;
      }

      get Image1() {
        return this.OtherInfo.controls['Image1'] as FormControl;
      }

      get Image2() {
        return this.OtherInfo.controls['Image2'] as FormControl;
      }

      get Image3() {
        return this.OtherInfo.controls['Image3'] as FormControl;
      }

      get Image4() {
        return this.OtherInfo.controls['Image4'] as FormControl;
      }

      get Image5() {
        return this.OtherInfo.controls['Image5'] as FormControl;
      }

  //#endregion
//#endregion

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.nextClicked = true;
    if (this.allTabsValid()) {
      this.mapProperty();
      this.housingService.addProperty(this.property);
      this.alertify.success('Congrats, your property listed successfully on our website');
      console.log(this.addPropertyForm);

      if(this.SellRent.value === '2') {
        this.router.navigate(['/rent-property']);
      } else {
        this.router.navigate(['/']);
      }

    } else {
      this.alertify.error('Please review the form and provide all valid entries');
    }
  }

  mapProperty(): void {
    this.property.Id = this.housingService.newPropID();
    this.property.SellRent = +this.SellRent.value;
    this.property.BHK = this.BHK.value;
    this.property.PType = this.PType.value;
    this.property.Name = this.Name.value;
    this.property.City = this.City.value;
    this.property.FType = this.FType.value;
    this.property.Price = this.Price.value;
    this.property.Security = this.Security.value;
    this.property.Maintenance = this.Maintenance.value;
    this.property.BuiltArea = this.BuiltArea.value;
    this.property.CarpetArea = this.CarpetArea.value;
    this.property.FloorNo = this.FloorNo.value;
    this.property.TotalFloor = this.TotalFloor.value;
    this.property.Address = this.Address.value;
    this.property.Address2 = this.LandMark.value;
    this.property.RTM = this.RTM.value;
    this.property.AOP = this.AOP.value;
    this.property.PA = this.PA.value;
    this.property.Gated = this.Gated.value;
    this.property.MainEntrance = this.MainEntrance.value;
    this.property.Possession = this.PossessionOn.value;
    this.property.Description = this.Description.value;
    this.property.PostedOn = new Date().toString();
    this.property.Image1 = this.getVariable.theFileName1;
    this.property.Image2 = this.getVariable.theFileName2;
    this.property.Image3 = this.getVariable.theFileName3;
    this.property.Image4 = this.getVariable.theFileName4;
    this.property.Image5 = this.getVariable.theFileName5;
  }

  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }

    if (this.PhotoInfo.invalid) {
      this.formTabs.tabs[4].active = true;
      return false;
    }

    return true;
  }

  selectTab(NextTabId: number, IsCurrentTabValid: boolean) {
    this.nextClicked = true;
    if (IsCurrentTabValid) {
      this.formTabs.tabs[NextTabId].active = true;
    }
  }

}