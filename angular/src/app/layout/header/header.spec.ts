import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header scroll state', () => {
  it('expands after 48 pixels and returns to its original state', async () => {
    let position = 0;
    const original = Object.getOwnPropertyDescriptor(window, 'scrollY');
    Object.defineProperty(window, 'scrollY', { configurable: true, get: () => position });
    try {
      await TestBed.configureTestingModule({ imports: [Header], providers: [provideRouter([])] }).compileComponents();
      const fixture = TestBed.createComponent(Header);
      fixture.detectChanges();
      const header = fixture.nativeElement.querySelector('header') as HTMLElement;
      expect(header.classList.contains('is-scrolled')).toBe(false);
      position = 49;
      window.dispatchEvent(new Event('scroll'));
      fixture.detectChanges();
      expect(header.classList.contains('is-scrolled')).toBe(true);
      position = 48;
      window.dispatchEvent(new Event('scroll'));
      fixture.detectChanges();
      expect(header.classList.contains('is-scrolled')).toBe(false);
    } finally {
      if (original) Object.defineProperty(window, 'scrollY', original);
      else Reflect.deleteProperty(window, 'scrollY');
    }
  });
});
