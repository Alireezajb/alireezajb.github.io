import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { ProjectData } from '../../projects.service';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, ButtonDirective],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  host: { '[class.small]': 'small()', '[class.reversed]': 'reversed()' },
})
export class ProjectCard {
  readonly project = input.required<ProjectData>();
  readonly small = input(false);
  readonly reversed = input(false);
}
