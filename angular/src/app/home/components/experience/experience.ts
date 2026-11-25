import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { ExperienceTimeline } from './experience-timeline/experience-timeline';

@Component({
  selector: 'app-experience',
  imports: [ButtonDirective, ExperienceTimeline],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceSection {}
