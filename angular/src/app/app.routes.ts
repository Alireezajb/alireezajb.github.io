import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Layout } from './layout/layout';
import { Project } from './projects/project/project';
import { ProjectDetail } from './projects/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', component: Home },
    { path: 'projects', component: Project },
    { path: 'projects/:id', component: ProjectDetail },
  ] },
];

