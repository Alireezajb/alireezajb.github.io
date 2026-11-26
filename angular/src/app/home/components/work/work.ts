import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { ProjectsService } from '../../../projects/projects.service';
import { ProjectCard } from '../../../projects/components/project-card/project-card';

@Component({
  selector: 'app-work',
  imports: [ButtonDirective, RouterLink, ProjectCard],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class WorkSection {
  protected readonly projects = inject(ProjectsService).getHomeProjects();
}
