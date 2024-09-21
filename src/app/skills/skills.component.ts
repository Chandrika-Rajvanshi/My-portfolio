import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  expandedSkill: number | null = null;

  toggleSkill(skillNumber: number) {
    this.expandedSkill = this.expandedSkill === skillNumber ? null : skillNumber;
  }
}
