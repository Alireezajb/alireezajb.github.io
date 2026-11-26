import { ButtonDirective } from 'primeng/button';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroArt } from './components/hero-art/hero-art';

@Component({
  selector: 'app-hero',
  imports: [ButtonDirective, RouterLink, HeroArt],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroSection {}
