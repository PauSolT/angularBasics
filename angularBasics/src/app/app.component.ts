import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, UserComponent, ChildComponent, CommentsComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}


