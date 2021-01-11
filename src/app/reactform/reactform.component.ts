import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  userform :FormGroup;
  constructor() {
    this.userform=new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl('',Validators.compose([Validators.required,Validators.email]))
    });
   }

  ngOnInit(): void {
  }
  onsubmit() :void
  {
    console.log(this.userform);
  }

}
