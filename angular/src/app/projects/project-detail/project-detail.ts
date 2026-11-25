import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { projects } from '../projects.data';

@Component({
  selector: 'app-project-detail',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  protected readonly project = inject(ActivatedRoute).paramMap.pipe(
    map(params => projects.find(item => item.id === params.get('id'))),
  );
}
