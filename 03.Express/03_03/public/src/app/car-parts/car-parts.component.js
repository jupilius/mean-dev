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
var car_service_1 = require("../shared/car.service");
/**
 * Created by kitri06 on 2017-05-17.
 */
var CarPartsComponent = (function () {
    function CarPartsComponent(carService) {
        this.carService = carService;
    }
    CarPartsComponent.prototype.btnCliked = function () {
        var _this = this;
        this.carService.getCars().subscribe(function (data) { return _this.heroes = data; });
        // console.log(data);
    };
    return CarPartsComponent;
}());
CarPartsComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        template: "\n    <h2>\uC601\uC6C5\uC785sdfasd\uB2C8\uB2E4.</h2>\n       \n    <ul>\n      <li *ngFor=\"let hero of heroes\">\n         {{hero.id}} \uBC88 \uC601\uC6C5 {{hero.name}}\n      </li>\n    </ul>\n    <button (click)=\"btnCliked()\">\uB20C\uB7EC\uC8FC\uC138\uC694</button>\n  "
    }),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarPartsComponent);
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map