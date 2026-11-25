import { ButtonDirective } from 'primeng/button';
import { Component } from '@angular/core';

@Component({
  imports: [ButtonDirective],
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutSection {}
