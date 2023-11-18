import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
  Id: number;
  SellRent: number;
  Name: string;
  PType: string;
  BHK: number;
  FType: string;
  Price: number;
  BuiltArea: number;
  CarpetArea?: number;
  Address: string;
  Address2?: string;
  City: string;
  FloorNo?: string;
  TotalFloor?: string;
  RTM: number;
  AOP?: string;
  PA?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Possession?: string;
  Image1: string;
  Image2?: string;
  Image3?: string;
  Image4?: string;
  Image5?: string;
  Description?: string;
  PostedOn: string;
  PostedBy: number;
  contactName: string;
  contactNumber: string;
  contactNumber2: string;
  contactEmail: string;
}
