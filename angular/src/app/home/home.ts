import { Component } from '@angular/core';
import { HeroSection } from './components/hero/hero';
import { WorkSection } from './components/work/work';
import { AboutSection } from './components/about/about';
import { ExpertiseSection } from './components/expertise/expertise';
import { ExperienceSection } from './components/experience/experience';
import { CollaborationSection } from './components/collaboration/collaboration';
import { ContactSection } from './components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [HeroSection, WorkSection, AboutSection, ExpertiseSection, ExperienceSection, CollaborationSection, ContactSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
