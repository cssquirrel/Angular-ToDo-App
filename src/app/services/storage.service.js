"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var StorageService = /** @class */ (function () {
    function StorageService() {
        this.messages = [];
    }
    StorageService.prototype.get = function () {
        var tasks = localStorage.getItem('tasks');
        return !!tasks ? JSON.parse(tasks) : [];
    };
    StorageService.prototype.set = function (tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };
    StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
    StorageService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        })
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map