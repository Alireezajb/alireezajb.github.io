import { TestBed } from '@angular/core/testing';
import { ExperienceSection } from './experience';

describe('Experience timeline', () => {
  it('renders all employers, roles and education', async () => {
    await TestBed.configureTestingModule({ imports: [ExperienceSection] }).compileComponents();
    const fixture = TestBed.createComponent(ExperienceSection);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelectorAll('p-timeline .experience-entry').length).toBe(4);
    expect(page.querySelectorAll('p-timeline .experience-role').length).toBe(5);
    expect(page.querySelector('.education-note')?.textContent).toContain('کارشناسی مهندسی کامپیوتر');
    expect(page.querySelectorAll('p-timeline time').length).toBe(8);
  });
});
