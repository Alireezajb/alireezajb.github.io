import { TestBed } from '@angular/core/testing';
import { isProjectCategory } from './project-category.model';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  it('accepts only defined project categories', () => {
    expect(isProjectCategory('طراحی سامانه')).toBe(true);
    expect(isProjectCategory('دسته‌بندی نامعتبر')).toBe(false);
    expect(TestBed.inject(ProjectsService).getAllProjects().every(project => project.category.every(isProjectCategory))).toBe(true);
  });

  it('returns home projects, all projects and the requested project', () => {
    const service = TestBed.inject(ProjectsService);
    const projects = service.getAllProjects();
    expect(projects.length).toBeGreaterThan(0);
    expect(service.getHomeProjects()).toEqual(projects.filter(project => project.showOnHome));
    expect(service.getProjectById(projects[0].id)).toEqual(projects[0]);
    expect(service.getProjectById('unknown')).toBeUndefined();
  });
});
