import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
})
export class SkillsComponent {
  skills = [
    { name: 'Angular' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'Tailwind CSS' },
    { name: 'Bootstrap' },
    { name: 'HTML & CSS' },
    { name: 'Git & GitHub' },
  ];
}
