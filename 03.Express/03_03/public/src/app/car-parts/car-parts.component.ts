import {Component} from "@angular/core";
import construct = Reflect.construct;
import {CarService} from "../shared/car.service";
import {Hero} from "../shared/hero.model";
/**
 * Created by kitri06 on 2017-05-17.
 */
@Component({
  selector : 'car-parts',
  template : `
    <h2>영웅입sdfasd니다.</h2>
       
    <ul>
      <li *ngFor="let hero of heroes">
         {{hero.id}} 번 영웅 {{hero.name}}
      </li>
    </ul>
    <button (click)="btnCliked()">눌러주세요</button>
  `
})
export class CarPartsComponent {
    heroes: Hero[];
    constructor(private carService: CarService) {}

    btnCliked() : void{
        this.carService.getCars().subscribe(data => this.heroes = data);
        // console.log(data);
    }

}
