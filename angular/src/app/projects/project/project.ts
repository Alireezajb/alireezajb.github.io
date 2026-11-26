import { Component, inject } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ProjectCard } from '../components/project-card/project-card';

@Component({
  selector: 'app-project',
  imports: [ProjectCard],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  protected readonly projects = inject(ProjectsService).getAllProjects();
}
