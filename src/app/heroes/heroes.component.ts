import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero1 :Hero={
    id:1,
    name:"ab"
  };
  heroes: Hero[]=[];
  selectedHero: Hero=<Hero>{};
   
  constructor(private heroService: HeroService) { }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
