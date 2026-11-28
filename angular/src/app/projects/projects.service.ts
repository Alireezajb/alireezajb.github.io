import { Injectable } from '@angular/core';
import projectData from './projects.json';
import { isProjectCategory, ProjectCategory } from './project-category.model';

export type ProjectData = Omit<(typeof projectData)[number], 'category'> & { category: ProjectCategory[]; website?: string };

const projects: ProjectData[] = projectData.map(project => {
  const category = project.category.map(value => {
    if (!isProjectCategory(value)) {
      throw new Error(`Invalid category for project ${project.id}: ${value}`);
    }
    return value;
  });
  return { ...project, category };
});

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
