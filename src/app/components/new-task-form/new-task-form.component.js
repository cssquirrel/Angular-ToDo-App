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
// classes
var task_1 = require("../../classes/task");
var NewTaskFormComponent = /** @class */ (function () {
    function NewTaskFormComponent() {
    }
    // Ng Native Methods ///////////////////////////////////////////////////////
    // helper functions ////////////////////////////////////////////////////////
    // event handlers  /////////////////////////////////////////////////////////
    NewTaskFormComponent.prototype.add = function (text) {
        if (!!text) {
            this.onAddTask({ text: text });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", task_1.Task)
    ], NewTaskFormComponent.prototype, "tasks", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], NewTaskFormComponent.prototype, "onAddTask", void 0);
    NewTaskFormComponent = __decorate([
        core_1.Component({
            selector: 'app-new-task-form',
            templateUrl: './new-task-form.component.html',
            styleUrls: ['./new-task-form.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], NewTaskFormComponent);
    return NewTaskFormComponent;
}());
exports.NewTaskFormComponent = NewTaskFormComponent;
//# sourceMappingURL=new-task-form.component.js.map