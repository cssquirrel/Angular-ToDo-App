"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// services
var storage_service_1 = require("../../services/storage.service");
var task_service_1 = require("../../services/task.service");
var TasksComponent = /** @class */ (function () {
    function TasksComponent(storageService, taskService) {
        var _this = this;
        this.storageService = storageService;
        this.taskService = taskService;
        this.updateStorage = function () {
            _this.storageService.set(_this.tasks);
            console.info(_this.tasks);
        };
        // event handlers  /////////////////////////////////////////////////////////
        this.addTask = function (task) {
            _this.taskService.addTask(task)
                .subscribe(function (task) {
                _this.tasks.push(task);
                _this.updateStorage();
            });
        };
        this.deleteTask = function (task) {
            _this.tasks = _this.tasks.filter(function (taskToMatch) {
                return taskToMatch !== task;
            });
            _this.taskService.deleteTask(task).subscribe(function (task) {
                _this.updateStorage();
            });
        };
        this.markTask = function (task) {
            task.isDone = !task.isDone;
            _this.taskService.updateTask(task).subscribe(function (task) {
                _this.updateStorage();
            });
        };
        this.selectTaskToEdit = function (task) {
            if (_this.selectedTask === task) {
                _this.selectedTask = false;
                _this.taskService.updateTask(task).subscribe(function (task) {
                    _this.updateStorage();
                });
            }
            else {
                _this.selectedTask = task;
            }
        };
    }
    // Ng Native Methods ///////////////////////////////////////////////////////
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    // helper functions ////////////////////////////////////////////////////////
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
            if (!_this.tasks.length) {
                // nothing coming from the API, so load from storage.
                _this.tasks = _this.storageService.get();
                if (_this.tasks.length) {
                    _this.taskService.addTasks(_this.tasks).subscribe();
                }
            }
        });
    };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'app-tasks',
            templateUrl: './tasks.component.html',
            styleUrls: ['./tasks.component.scss']
        }),
        __metadata("design:paramtypes", [storage_service_1.StorageService,
            task_service_1.TaskService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map