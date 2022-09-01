import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersPageRoutingModule } from './characters-page-routing.module';
import { CharactersPageComponent } from './characters-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterPageDetailComponent } from './character-page-detail/character-page-detail.component';


@NgModule({
  declarations: [
    CharactersPageComponent,
    CharacterPageDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersPageRoutingModule,
    SharedModule
  ]
})
export class CharactersPageModule { }
