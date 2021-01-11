import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  angForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) 
    {
      this.angForm = this.fb.group({
        name: ['', Validators.required ],
        price: ['', Validators.required ],
        quantity: ['', Validators.required ]
      });
  }

  // createForm() {
  //   this.angForm = this.fb.group({
  //     name: ['', Validators.required ],
  //     price: ['', Validators.required ],
  //     quantity: ['', Validators.required ]
  //   });
  // }
  ngOnInit(): void {
  }

}
