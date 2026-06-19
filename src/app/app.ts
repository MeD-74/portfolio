import { Component, AfterViewInit } from '@angular/core'; 
import { NavbarComponent } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { MyProjectsComponent } from './components/my-projects/my-projects';
import { ContactComponent } from './components/contact/contact';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, Hero, About, SkillsComponent, MyProjectsComponent, ContactComponent],
  templateUrl: './app.html',
})
export class AppComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    
    setTimeout(() => {
      AOS.init({
        duration: 800, 
        easing: 'ease-in-out', 
        once: false, 
        offset: 100 
      });
      AOS.refresh();
    }, 100);
  }
}