import { Component, Input, inject } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from './car.service';
import { LowerCasePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, UserComponent, ChildComponent, CommentsComponent,ReactiveFormsModule, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}




