import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  constructor() {
    const document = inject(DOCUMENT);
    inject(ViewportScroller).setOffset(() => [0, (document.querySelector('app-header')?.getBoundingClientRect().height ?? 0) + 20]);
  }
}
