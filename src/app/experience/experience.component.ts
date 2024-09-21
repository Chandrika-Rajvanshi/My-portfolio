import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  expandedSection: string | null = null;

  toggleDetails(section: string) {
    this.expandedSection = this.expandedSection === section ? null : section;
  }
}
