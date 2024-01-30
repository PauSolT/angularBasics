import { Component,Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  logoUrl = '/assets/icon.jpg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
