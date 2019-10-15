"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./tasks.component.scss.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/forms");
var i3 = require("@angular/common");
var i4 = require("../new-task-form/new-task-form.component.ngfactory");
var i5 = require("../new-task-form/new-task-form.component");
var i6 = require("./tasks.component");
var i7 = require("../../services/storage.service");
var i8 = require("../../services/task.service");
var styles_TasksComponent = [i0.styles];
var RenderType_TasksComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TasksComponent, data: {} });
exports.RenderType_TasksComponent = RenderType_TasksComponent;
function View_TasksComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [["class", "task-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.text; _ck(_v, 1, 0, currVal_0); }); }
function View_TasksComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "input", [["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 1).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 1)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_v.parent.context.$implicit.text = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i1.ɵdid(1, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(3, 671744, null, 0, i2.NgModel, [[8, null], [8, null], [8, null], [6, i2.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(5, 16384, null, 0, i2.NgControlStatus, [[4, i2.NgControl]], null, null)], function (_ck, _v) { var currVal_7 = _v.parent.context.$implicit.text; _ck(_v, 3, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 5).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 5).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 5).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 5).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 5).ngClassValid; var currVal_5 = i1.ɵnov(_v, 5).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 5).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_TasksComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "button", [["class", "delete"], ["title", "delete task"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.deleteTask(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["X"]))], null, null); }
function View_TasksComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Edit"]))], null, null); }
function View_TasksComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Save"]))], null, null); }
function View_TasksComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "button", [["class", "edit"], ["title", "edit task"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectTaskToEdit(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TasksComponent_6)), i1.ɵdid(2, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TasksComponent_7)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.selectedTask !== _v.parent.context.$implicit); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.selectedTask === _v.parent.context.$implicit); _ck(_v, 4, 0, currVal_1); }, null); }
function View_TasksComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "li", [["class", "task"]], [[2, "selected", null], [2, "completed", null]], null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "button", [["class", "mark"], ["title", "mark task"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.markTask(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["\u2714"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TasksComponent_2)), i1.ɵdid(4, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TasksComponent_3)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TasksComponent_4)), i1.ɵdid(8, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TasksComponent_5)), i1.ɵdid(10, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = (_co.selectedTask !== _v.context.$implicit); _ck(_v, 4, 0, currVal_2); var currVal_3 = (_co.selectedTask === _v.context.$implicit); _ck(_v, 6, 0, currVal_3); var currVal_4 = _v.context.$implicit.isDone; _ck(_v, 8, 0, currVal_4); var currVal_5 = !_v.context.$implicit.isDone; _ck(_v, 10, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.selectedTask === _v.context.$implicit); var currVal_1 = _v.context.$implicit.isDone; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_TasksComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-new-task-form", [], null, null, null, i4.View_NewTaskFormComponent_0, i4.RenderType_NewTaskFormComponent)), i1.ɵdid(1, 49152, null, 0, i5.NewTaskFormComponent, [], { tasks: [0, "tasks"], onAddTask: [1, "onAddTask"] }, null), (_l()(), i1.ɵeld(2, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Tasks To Complete"])), (_l()(), i1.ɵeld(4, 0, null, null, 2, "ul", [["class", "tasks"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_TasksComponent_1)), i1.ɵdid(6, 278528, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tasks; var currVal_1 = _co.addTask; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.tasks; _ck(_v, 6, 0, currVal_2); }, null); }
exports.View_TasksComponent_0 = View_TasksComponent_0;
function View_TasksComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-tasks", [], null, null, null, View_TasksComponent_0, RenderType_TasksComponent)), i1.ɵdid(1, 114688, null, 0, i6.TasksComponent, [i7.StorageService, i8.TaskService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_TasksComponent_Host_0 = View_TasksComponent_Host_0;
var TasksComponentNgFactory = i1.ɵccf("app-tasks", i6.TasksComponent, View_TasksComponent_Host_0, {}, {}, []);
exports.TasksComponentNgFactory = TasksComponentNgFactory;
//# sourceMappingURL=tasks.component.ngfactory.js.map