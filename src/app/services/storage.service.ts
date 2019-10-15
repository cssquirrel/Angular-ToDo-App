import { Injectable } from '@angular/core';

// classes
import { Task } from '../classes/task';

@Injectable({
    providedIn: 'root',
})

export class StorageService {
    messages: string[] = [];

    get(): Task[] {
        const tasks = localStorage.getItem('tasks');
        return !!tasks ? JSON.parse(tasks) : [];
    }

    set(tasks: Task[]): void {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}