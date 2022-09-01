import { RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [GalleryComponent, PaginationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [GalleryComponent, PaginationComponent]
})
export class SharedModule { }
