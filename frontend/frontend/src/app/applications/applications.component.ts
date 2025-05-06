import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; // ✅ Import CommonModule + DatePipe
import { ApplicationService } from '../application.service';
import { Application } from '../application';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule], // ✅ Required for *ngFor and |date
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
  providers: [DatePipe] // ✅ Enables Angular date pipe
})
export class ApplicationsComponent {
  applications: Application[] = [];

  constructor(private appService: ApplicationService) {}

  ngOnInit(): void {
    this.appService.getAll().subscribe({
      next: (data) => {
        this.applications = data;
      },
      error: (err) => {
        console.error('Error fetching applications:', err);
      }
    });
  }
}
