import { Component, OnInit } from '@angular/core';
import { Hero } from "../Hero";

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  hero :Hero={
    name: "Hero1",
    id:1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
