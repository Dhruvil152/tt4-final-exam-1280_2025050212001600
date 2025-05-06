import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from './application';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = 'https://localhost:7262/api/Applications';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }

  create(app: Application): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, app);
  }

  update(app: Application): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${app.id}`, app);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
