import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  loginform= new FormGroup({
    userid: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  regformsub() {
    window.alert("Wait Sometime Our Server Busy");
    console.log(this.loginform.value);
    
  }

}
