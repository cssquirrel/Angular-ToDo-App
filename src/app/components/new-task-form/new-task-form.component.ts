import { Component, Input } from '@angular/core';

// classes
import { Task } from '../../classes/task';

@Component({
    selector: 'app-new-task-form',
    templateUrl: './new-task-form.component.html',
    styleUrls: ['./new-task-form.component.scss']
})

export class NewTaskFormComponent {

    // variables ///////////////////////////////////////////////////////////////

    @Input() tasks: Task
    @Input() onAddTask: (task: Task) => any;

    constructor() { }

    // Ng Native Methods ///////////////////////////////////////////////////////

    // helper functions ////////////////////////////////////////////////////////

    // event handlers  /////////////////////////////////////////////////////////

    add(text: string): void {
        if (!!text) {
            this.onAddTask({text} as Task);
        }
    }
}