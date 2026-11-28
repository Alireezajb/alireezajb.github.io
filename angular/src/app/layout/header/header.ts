import { ButtonDirective } from 'primeng/button';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-header',
  imports: [ButtonDirective, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly scroll = inject(ScrollService);
  protected readonly menuOpen = signal(false);
}
