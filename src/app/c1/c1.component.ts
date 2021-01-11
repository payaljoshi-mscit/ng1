import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  v1 :number =225;
  a1=["e1","e2","e3","e4","e5"];
  s1="Hello";
  b1=true;
  collection: string[] = ['a', 'b', 'c', 'd'];
  str: string = 'abcdefghij';
  a: number = 0.259;
  b: number = 1.3495;
  num :number=225;
  constructor() { }
  f1(event :Event)
  {
    alert("Hello");
  }
  ngOnInit(): void {
  }

}
