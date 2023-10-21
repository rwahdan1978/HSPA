import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user: User;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder, private UserServiceService: UserServiceService) { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, {validators : this.passwordMatchingValidator})
  }
  
    passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null{
  
      const password = fc.get('password');
      const confirmPassword = fc.get('confirmPassword');
      
      if (password && confirmPassword && password?.value != confirmPassword?.value){
        return{
                passwordMatchError : true 
        }
      }
      return null;
    }

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit() {

    this.userSubmitted = true;
    
    if (this.registerationForm.valid)
    {
      console.log(this.registerationForm.value);
      //this.user = Object.assign(this.user, this.registerationForm.value);
      this.UserServiceService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
    }
  
  }

  userData(): User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
}