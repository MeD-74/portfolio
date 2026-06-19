import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects.html',
})
export class MyProjectsComponent {
  projects = [
    {
      title: 'E-commerce Platform',
      description: 'A demo version of a project that features a responsive storefront.',
      techStack: ['Angular', 'Tailwind CSS', 'Typescript'],
      githubLink: 'https://github.com/MeD-74/fresh-food',
      liveLink: 'https://med-74.github.io/fresh-food/',
      image: 'assets/images/1.png',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      iconColor: 'text-indigo-500',
    },
    {
      title: 'Employee Admin Dashboard',
      description:
        'Employee Admin Dashboard is a responsive web app for managing employees, tracking performance, and organizing administrative tasks efficiently.',
      techStack: ['Angular', 'Tailwind CSS', 'TypeScript'],
      githubLink: 'https://github.com/MeD-74/admin-dashboard',
      liveLink: 'https://med-74.github.io/admin-dashboard/login',
      image: 'assets/images/2.png',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
      iconColor: 'text-emerald-500',
    },
    {
      title: 'Personal Finance App',
      description:
        'A comprehensive personal finance tracker designed to manage budgets, monitor daily transactions, and track your saving goals with an interactive dashboard.',
      techStack: ['Angular', 'Tailwind CSS', 'TypeScript'],
      githubLink: 'https://github.com/MeD-74/personal-finance-app',
      liveLink: 'https://med-74.github.io/personal-finance-app/#/login',
      image: 'assets/images/3.png',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-500',
    },
  ];
}
