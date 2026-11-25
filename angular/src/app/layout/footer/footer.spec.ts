import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';

describe('Footer', () => {
  it('scrolls to the top when the button is clicked', async () => {
    const scroll = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    await TestBed.configureTestingModule({ imports: [Footer], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();
    (fixture.nativeElement.querySelector('button.back-top') as HTMLButtonElement).click();
    expect(scroll).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
    scroll.mockRestore();
  });
});

