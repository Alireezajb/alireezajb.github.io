import { Injectable } from '@angular/core';
import projects from './projects.json';

export type ProjectData = (typeof projects)[number];

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  getHomeProjects(): ProjectData[] {
    return projects.filter(project => project.showOnHome);
  }

  getAllProjects(): ProjectData[] {
    return projects;
  }

  getProjectById(id: string | null): ProjectData | undefined {
    return projects.find(project => project.id === id);
  }
}
