import { Component } from '@angular/core';
import { projects } from '../projects.data';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-project',
  imports: [ProjectCard],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  protected readonly projects = projects;
}
