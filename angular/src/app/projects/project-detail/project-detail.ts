import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-detail',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  private readonly projectsService = inject(ProjectsService);
  protected readonly selectedImage = signal(0);
  protected nextProject(id: string) { const projects = this.projectsService.getAllProjects(); return projects[(projects.findIndex(item => item.id === id) + 1) % projects.length]; }
  protected readonly project = inject(ActivatedRoute).paramMap.pipe(
    map(params => this.projectsService.getProjectById(params.get('id'))),
    tap(() => this.selectedImage.set(0)),
  );
}


