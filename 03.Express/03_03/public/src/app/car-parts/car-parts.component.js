"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Created by kitri06 on 2017-05-17.
 */
var CarPartsComponent = (function () {
    function CarPartsComponent() {
        this.today = Date.now();
        this.carParts = [
            {
                'id': 1,
                'name': 'Super Tires',
                'description': 'These tires are the very best',
                'price': 125000,
                'inStock': 1
            },
            {
                'id': 2,
                'name': 'Super Tires 2',
                'description': 'These tires are the very best 2 ',
                'price': 233000,
                'inStock': 2
            },
            {
                'id': 3,
                'name': 'Super Tires 3',
                'description': 'These tires are the very best 3 ',
                'price': 625000,
                'inStock': 0
            }
        ];
    }
    CarPartsComponent.prototype.totoalCarPrice = function () {
        //  같은 표현
        // let totalCarPrice: number = 0;
        //
        // for (let carPart of this.carParts) {
        //   totalCarPrice += carPart.price;
        // }
        // return totalCarPrice;
        // return this.carParts.reduce(
        //   function (prev, curr) {
        //     return prev + curr.price;
        //   },
        //   0
        // );
        // reduce는 배열과 같은 것을 루프를 돌리지 않고 계산 할 수 있다.
        // 함수형 프로그램잉.
        return this.carParts.reduce(function (prev, curr) { return prev + curr.price; }, 0);
    };
    return CarPartsComponent;
}());
CarPartsComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        template: "\n    <h2>{{today | date:'fullDate'}}</h2>\n    <h2>\uC804\uCCB4 \uC81C\uD488 \uAC00\uACA9\uC758 \uD569\uC740 {{totoalCarPrice() |  currency:'KRW':true:'4.2-2' }}\uC785\uB2C8\uB2E4.</h2>\n    <ul>\n      <li *ngFor=\"let carPart of carParts\">\n        <h2>{{carPart.name | uppercase}}</h2>\n        <h2>ID : {{carPart.id}}</h2>\n        <p>{{carPart.description | toolong : 20 }}</p>\n        <p>\uAC00\uACA9\uC740 {{carPart.price |  currency:'KRW':true:'4.2-2'}}\uC785\uB2C8\uB2E4.</p>\n        <p *ngIf=\"carPart.inStock > 0\">\uC7AC\uACE0\uB294 {{carPart.inStock}}\uAC1C \uC788\uC2B5\uB2C8\uB2E4.</p>\n        <p *ngIf=\"carPart.inStock === 0\">\uC7AC\uACE0\uC5C6\uC74C. </p>\n      </li>\n    </ul>\n  "
    })
], CarPartsComponent);
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map