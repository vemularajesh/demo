import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  regsiterform= new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.minLength(3)]),
    phoneno: new FormControl('',[Validators.required,Validators.minLength(10)]),
    dob: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    conformpassword: new FormControl('',[Validators.required,Validators.minLength(5)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  
  regformsub() {
    window.alert("Ruccessfully Register");
    console.log(this.regsiterform.value);    
  }

}
