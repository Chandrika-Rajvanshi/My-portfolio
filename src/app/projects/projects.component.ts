import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  expandedProject: number | null = null;

  toggleProject(projectNumber: number) {
    this.expandedProject = this.expandedProject === projectNumber ? null : projectNumber;
  }
}
