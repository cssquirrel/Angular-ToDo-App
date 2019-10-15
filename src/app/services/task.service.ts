import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// classes
import { Task } from '../classes/task';

@Injectable({
    providedIn: 'root',
})

export class TaskService {

    // variables
    options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    private baseUrl = 'api/tasks';

    constructor(
        private http: HttpClient
    ) {}

    // Helper functions ////////////////////////////////////////////////////////

    // CRUD ////////////////////////////////////////////////////////////////////

    /* Mimicking an API using 'angular-in-memory-web-api' so we don't need a 
       backend. */

    addTask (task: Task): Observable<Task> {
        return this.http.post<Task>(this.baseUrl, task, this.options);
    }
    
    addTasks (tasks: Task[]): Observable<Task[]> {
        return this.http.post<Task[]>(this.baseUrl, tasks, this.options);
    }

    deleteTask (task: Task): Observable<Task> {
        const url = this.baseUrl + "/" + task.id;
        return this.http.delete<Task>(url, this.options);
    }

    getTask (id: number): Observable<Task> {
        const url = this.baseUrl + "/" + id;
        return this.http.get<Task>(url);
    }

    getTasks (): Observable<Task[]> {
        return this.http.get<Task[]>(this.baseUrl);
    }

    updateTask (task: Task): Observable<any> {
        return this.http.put(this.baseUrl, task, this.options);
    }
}