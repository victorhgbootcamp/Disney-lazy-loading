import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
characters = [];
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
this.getCharacters(1)

  }

  getCharacters(actualPage: number){
    this.charactersService.getCharacters(actualPage).subscribe((res:any) =>{
      this.characters = res.data;
      
    })
  }
}
