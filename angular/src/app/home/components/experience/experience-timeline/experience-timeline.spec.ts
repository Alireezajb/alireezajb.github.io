import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { ExperienceTimeline } from './experience-timeline';

describe('Experience timeline scroll progress', () => {
  it('updates progress in both directions and removes listeners', async () => {
    const requestFrame = vi.spyOn(window, 'requestAnimationFrame');
    const removeListener = vi.spyOn(window, 'removeEventListener');
    await TestBed.configureTestingModule({ imports: [ExperienceTimeline] }).compileComponents();
    const fixture = TestBed.createComponent(ExperienceTimeline);
    fixture.detectChanges();
    const event = fixture.nativeElement.querySelector('.p-timeline-event') as HTMLElement;
    let top = window.innerHeight * .7 - 50;
    vi.spyOn(event, 'getBoundingClientRect').mockImplementation(() => ({ top, height: 100 }) as DOMRect);
    let callback!: FrameRequestCallback;
    requestFrame.mockImplementation(fn => { callback = fn; return 1; });
    window.dispatchEvent(new Event('scroll'));
    callback(0);
    expect(Number(event.style.getPropertyValue('--progress'))).toBeCloseTo(.5);
    top += 25;
    window.dispatchEvent(new Event('scroll'));
    callback(0);
    expect(Number(event.style.getPropertyValue('--progress'))).toBeCloseTo(.25);
    fixture.destroy();
    expect(removeListener).toHaveBeenCalledWith('scroll', expect.any(Function));
    vi.restoreAllMocks();
  });
});
