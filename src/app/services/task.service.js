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
var http_1 = require("@angular/common/http");
var i0 = require("@angular/core");
var i1 = require("@angular/common/http");
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        // variables
        this.options = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.baseUrl = 'api/tasks';
    }
    // Helper functions ////////////////////////////////////////////////////////
    // CRUD ////////////////////////////////////////////////////////////////////
    /* Mimicking an API using 'angular-in-memory-web-api' so we don't need a
       backend. */
    TaskService.prototype.addTask = function (task) {
        return this.http.post(this.baseUrl, task, this.options);
    };
    TaskService.prototype.addTasks = function (tasks) {
        return this.http.post(this.baseUrl, tasks, this.options);
    };
    TaskService.prototype.deleteTask = function (task) {
        var url = this.baseUrl + "/" + task.id;
        return this.http.delete(url, this.options);
    };
    TaskService.prototype.getTask = function (id) {
        var url = this.baseUrl + "/" + id;
        return this.http.get(url);
    };
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.baseUrl);
    };
    TaskService.prototype.updateTask = function (task) {
        return this.http.put(this.baseUrl, task, this.options);
    };
    TaskService.ngInjectableDef = i0.defineInjectable({ factory: function TaskService_Factory() { return new TaskService(i0.inject(i1.HttpClient)); }, token: TaskService, providedIn: "root" });
    TaskService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map