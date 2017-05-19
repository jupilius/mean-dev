"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Created by kitri06 on 2017-05-17.
 */
var ToolongPipe = (function () {
    function ToolongPipe() {
    }
    ToolongPipe.prototype.transform = function (value, homMany) {
        if (!homMany) {
            homMany = 20;
        }
        if (value.length > homMany) {
            return value.substr(0, homMany) + '...';
        }
        else {
            return value;
        }
    };
    return ToolongPipe;
}());
ToolongPipe = __decorate([
    core_1.Pipe({
        name: 'toolong'
    })
], ToolongPipe);
exports.ToolongPipe = ToolongPipe;
//# sourceMappingURL=toolong.pipe.js.map