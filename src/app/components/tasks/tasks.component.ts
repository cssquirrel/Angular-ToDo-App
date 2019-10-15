import { Component, OnInit } from '@angular/core';

// classes
import { Task } from '../../classes/task';

// services
import { StorageService } from '../../services/storage.service';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

    // variables ///////////////////////////////////////////////////////////////

    tasks: Task[];
    selectedTask: Task | boolean;

    constructor(
        private storageService: StorageService,
        private taskService: TaskService
    ) { }

    // Ng Native Methods ///////////////////////////////////////////////////////

    ngOnInit() {
        this.getTasks();
    }

    // helper functions ////////////////////////////////////////////////////////

    getTasks(): void {
        this.taskService.getTasks().subscribe((tasks) => {
            this.tasks = tasks;
            if (!this.tasks.length) {
                // nothing coming from the API, so load from storage.
                this.tasks = this.storageService.get();
                if (this.tasks.length) {
                    this.taskService.addTasks(this.tasks).subscribe();
                }
            }
        });
    }

    updateStorage = () => {
        this.storageService.set(this.tasks);
        console.info(this.tasks);
    }

    // event handlers  /////////////////////////////////////////////////////////

    addTask = (task: Task): void => {
        this.taskService.addTask(task)
            .subscribe(task => {
            this.tasks.push(task);
            this.updateStorage();
        });
    }

    deleteTask = (task: Task): void => {
        this.tasks = this.tasks.filter((taskToMatch) => {
            return taskToMatch !== task
        });
        this.taskService.deleteTask(task).subscribe((task) => {
            this.updateStorage();
        });
    }

    markTask = (task: Task): void => {
        task.isDone = !task.isDone;
        this.taskService.updateTask(task).subscribe((task) => {
            this.updateStorage();
        })
    }

    selectTaskToEdit = (task: Task): void => {
        if (this.selectedTask === task) {
            this.selectedTask = false;
            this.taskService.updateTask(task).subscribe((task) => {
                this.updateStorage();
            })
        } else {
            this.selectedTask = task;
        }
    }
}