import { CharacterPageDetailComponent } from './character-page-detail/character-page-detail.component';
import { CharactersPageComponent } from './characters-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: CharactersPageComponent},
  {path: ":idCharacter", component: CharacterPageDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule { }
