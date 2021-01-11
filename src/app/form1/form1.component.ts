import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
// import ReactiveFormsModule from @angular/forms in app.module.js 
// and add ReactiveFormsModule in imports array

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  show ="";
  constructor(private formBuilder: FormBuilder){}
  //Add user form actions
  get f() { return this.registerForm.controls; }
  onSubmit() {
    console.log(this.registerForm);

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Data submitted");
    }
   
  }
    ngOnInit() {
      //Add User form validations
      //this.registerForm = this.formBuilder.group({});
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],     
        firstname: ['', [Validators.required, Validators.minLength(6)]]
      });
    }



}
