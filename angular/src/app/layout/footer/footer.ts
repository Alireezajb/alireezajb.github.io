import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

@Component({
  imports: [ButtonDirective],
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly document = inject(DOCUMENT);

  protected scrollToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'auto' });
  }
}

