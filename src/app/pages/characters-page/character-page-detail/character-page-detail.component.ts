import { CharactersService } from './../../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-page-detail',
  templateUrl: './character-page-detail.component.html',
  styleUrls: ['./character-page-detail.component.scss']
})
export class CharacterPageDetailComponent implements OnInit {
character: any = {}
  constructor(private route: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const idCharacter = params.get('idCharacter')
      this.characterService.getCharacter(idCharacter).subscribe((res: any) =>{
        this.character = res
      })
    })
  }

}
