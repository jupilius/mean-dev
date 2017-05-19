import {Component} from "@angular/core";
/**
 * Created by kitri06 on 2017-05-17.
 */
@Component({
  selector : 'car-parts',
  template : `
    <h2>{{today | date:'fullDate'}}</h2>
    <h2>전체 제품 가격의 합은 {{totoalCarPrice() |  currency:'KRW':true:'4.2-2' }}입니다.</h2>
    <ul>
      <li *ngFor="let carPart of carParts">
        <h2>{{carPart.name | uppercase}}</h2>
        <h2>ID : {{carPart.id}}</h2>
        <p>{{carPart.description | toolong : 20 }}</p>
        <p>가격은 {{carPart.price |  currency:'KRW':true:'4.2-2'}}입니다.</p>
        <p *ngIf="carPart.inStock > 0">재고는 {{carPart.inStock}}개 있습니다.</p>
        <p *ngIf="carPart.inStock === 0">재고없음. </p>
      </li>
    </ul>
  `
})
export class CarPartsComponent {
  today: number = Date.now();
  carParts =
    [
      {
        'id': 1,
        'name': 'Super Tires',
        'description': 'These tires are the very best',
        'price' : 125000,
        'inStock': 1
      },
      {
        'id': 2,
        'name': 'Super Tires 2',
        'description': 'These tires are the very best 2 ',
        'price' : 233000,
        'inStock': 2
      },
      {
        'id': 3,
        'name': 'Super Tires 3',
        'description': 'These tires are the very best 3 ',
        'price' : 625000,
        'inStock': 0
      }
    ]
  ;
  totoalCarPrice(): number {
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
    return this.carParts.reduce((prev, curr) => prev + curr.price, 0);
  }
}
