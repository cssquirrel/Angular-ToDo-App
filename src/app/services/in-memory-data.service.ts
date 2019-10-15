import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

// classes
import { Task } from '../classes/task';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const tasks: Task[] = [];
        return {tasks};
    }

    genId(tasks: Task[]): number {
        return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    }
}