import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly scrolled = signal(false);
  readonly isScrolled = this.scrolled.asReadonly();

  constructor() {
    const view = inject(DOCUMENT).defaultView;
    if (!view) return;
    const update = () => this.scrolled.set(view.scrollY > 48);
    update();
    view.addEventListener('scroll', update, { passive: true });
    inject(DestroyRef).onDestroy(() => view.removeEventListener('scroll', update));
  }
}
