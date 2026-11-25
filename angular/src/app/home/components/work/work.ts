import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from 'primeng/button';
import { projects } from '../../../projects/projects.data';
import { ProjectCard } from '../../../projects/project-card/project-card';

@Component({
  selector: 'app-work',
  imports: [ButtonDirective, RouterLink, ProjectCard],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class WorkSection {
  protected readonly projects = projects;
}
