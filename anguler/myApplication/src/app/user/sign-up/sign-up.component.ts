import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm! : FormGroup;
  isShowPass = false;
  isShowConfirmPass = false;
  isMatch = false;

  constructor(private formBuilder : FormBuilder, 
    private apiCallService:ApiCallService, private router:Router
     ){}

  ngOnInit(){
    this.formDetails();
  }

  formDetails(){
    this.signUpForm = this.formBuilder.group({
      fullName:['', [Validators.required, Validators.pattern("^[a-zA-Z ]*$"), this.whiteSpaceRemoveValidator]],
      Mob:[null, [Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.required]],
      Pan:['', [Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]$"), Validators.required]],
      Gender:[],
      password:['', [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,12}$/), Validators.required]],
      confirmPass:['', [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,12}$/), Validators.required]],
      tc:[ ,[Validators.requiredTrue]]
    })                                   
  }

  showPassword(){
    this.isShowPass = !this.isShowPass;
  }
  showConPassword(){
    this.isShowConfirmPass = !this.isShowConfirmPass;
  }

  passMatch(){
    if(this.signUpForm.value.confirmPass != null){
      if (this.signUpForm.value.password === this.signUpForm.value.confirmPass) {
         this.isMatch = false;
      }else{
        this.isMatch = true;
      }
    }
  }

  submit(){
    console.log("This signUpForm Value ", this.signUpForm.value);
    this.apiCallService.postApiCall(this.signUpForm.value).subscribe(response =>{
    this.router.navigateByUrl("/user/userlogin")
    })
  }

  whiteSpaceRemoveValidator(includeValue:any){
    return includeValue?.value?.includes('  ')?{'whiteSpaceError':true}:null;
  }
}
