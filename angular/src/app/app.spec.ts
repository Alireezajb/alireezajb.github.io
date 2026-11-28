import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

@Component({ template: '<h1>صفحهٔ دیگر</h1>' })
class OtherPage {}

describe('App layout', () => {
  it('keeps the header and footer when the routed content changes', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([{ ...routes[0], children: [...routes[0].children!, { path: 'other', component: OtherPage }] }])],
    }).compileComponents();
    const setOffset = vi.spyOn(TestBed.inject(ViewportScroller), 'setOffset');
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    const header = page.querySelector('header');
    expect(setOffset).toHaveBeenCalledWith(expect.any(Function));
    const footer = page.querySelector('footer');
    expect(page.querySelector('main h1')?.textContent).toContain('پشت هر تجربهٔ خوب');
    for (const id of ['home', 'work', 'about', 'expertise', 'experience', 'collaboration', 'contact']) {
      expect(page.querySelector('main section#' + id)).toBeTruthy();
    }
    expect(header).toBeTruthy();
    expect(footer).toBeTruthy();
    await router.navigateByUrl('/other');
    fixture.detectChanges();
    expect(page.querySelector('main h1')?.textContent).toContain('صفحهٔ دیگر');
    expect(page.querySelector('header')).toBe(header);
    expect(page.querySelector('footer')).toBe(footer);
  });
});


