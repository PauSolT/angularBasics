import { Component,Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'youngTech';
  favoriteFramework = '';
}
