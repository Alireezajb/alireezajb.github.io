import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from '../app';
import { routes } from '../app.routes';

describe('project routes', () => {
  it('shows the project list, selected detail and an unknown-project message', async () => {
    await TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const router = TestBed.inject(Router);
    const page = fixture.nativeElement as HTMLElement;
    await router.navigateByUrl('/');
    fixture.detectChanges();
    const homeCards = [...page.querySelectorAll('app-project-card')].map(card => ({
      title: card.querySelector('h3')?.textContent,
      link: card.querySelector('a')?.getAttribute('href'),
    }));
    expect(homeCards.length).toBe(4);
    await router.navigateByUrl('/projects');
    fixture.detectChanges();
    expect(page.querySelectorAll('app-project-card').length).toBe(11);
    const projectCards = [...page.querySelectorAll('app-project-card')].map(card => ({
      title: card.querySelector('h3')?.textContent,
      link: card.querySelector('a')?.getAttribute('href'),
    }));
    expect(projectCards).toEqual(expect.arrayContaining(homeCards));
    await router.navigateByUrl('/projects/healthcare');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(page.querySelector('main h1')?.textContent).toContain('پیشگو سلامت');
    await router.navigateByUrl('/projects/fleet');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(page.querySelector('main h1')?.textContent).toContain('فیلیت‌یار');
    for (const [id, title] of [['ranovika', 'رانویکا'], ['shahrnik', 'شهرنیک'], ['taavonkar', 'تعاون‌کار'], ['madonik', 'مدونیک'], ['dyar', 'دیار'], ['taxilon', 'تاکسی‌لون']]) {
      await router.navigateByUrl('/projects/' + id);
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();
      expect(page.querySelector('main h1')?.textContent).toContain(title);
    }
    await router.navigateByUrl('/projects/unknown');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(page.querySelector('main h1')?.textContent).toContain('پروژه پیدا نشد');
  });
});
