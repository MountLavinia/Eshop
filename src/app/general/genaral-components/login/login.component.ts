import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Genaral-Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    re_password: new FormControl('',[Validators.minLength(6)]),
    email: new FormControl('',[Validators.email, Validators.email]),
  });
  loginForm = this.fb.group({
    username: new FormControl(''),
    password: new FormControl('')
  });

  get getControls(){
    return this.registerForm.controls;
  }
  get getLoginControls(){
    return this.loginForm.controls;
  }

  constructor(private fb: FormBuilder, private userSevice: UserService) { }

  ngOnInit(): void {
    
  }

  OnSubmit(){
    console.log(this.registerForm.value);
    this.userSevice.Register(this.registerForm.value).subscribe((res)=>{
      alert('Register Success');
      console.log(res);
    },(err)=>{
      alert("registerFail!");
      console.log(err);
      
    })
  }

  Login(){
    console.log("log");
    console.log(this.loginForm.value);
    
  }

}
