import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm! : FormGroup;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
    this.formDetails();
  }

  formDetails(){
    this.signUpForm = this.formBuilder.group({
      fullName:['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$")]],
      Mob:[null, [Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.required]],
      Pan:['', [Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]$"), Validators.required]],
      Gender:[],
      password:['', [Validators.pattern("^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$"), Validators.required]],
      confirmPass:['', [Validators.pattern("^(?=.*[a-z])(?=.*\d)(?=.*[@!$&%*?])[a-zA-Z\d@!$&%*?]{8,12}$"), Validators.required]]
    })
  }
}
