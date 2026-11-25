import { ButtonDirective } from 'primeng/button';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [ButtonDirective, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroSection {}
