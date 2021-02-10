import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public form:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    
  ) { 
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }
  
  public onSubmit(): void {
    // if (this.form.invalid) {
    //   return;
    // }
    // else {
    
    this.router.navigate(['home']);
    // }
  }



}
