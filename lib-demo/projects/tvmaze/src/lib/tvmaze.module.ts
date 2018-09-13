import { NgModule } from '@angular/core';
import { TvmazeComponent } from './tvmaze.component';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TvmazeComponent, PosterComponent],
  exports: [TvmazeComponent, PosterComponent]
})
export class TvmazeModule { }
