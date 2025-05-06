import { Component } from '@angular/core';
import { ApplicationsComponent } from './applications/applications.component'; // 👈 import the child component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApplicationsComponent], // 👈 include it here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Job Application Tracker';
}
