
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import {Hero} from "./hero.model";


/**
 * Created by kitri06 on 2017-05-19.
 */
@Injectable()
export class CarService {
    constructor(private http: Http){}

    getCars() : Observable<Hero[]> {
        return this.http.get('/heroes')
            .map(res => res.json());
    }
    // 동기식으로 전달한다.
    getCarsWithPromise(): Promise<Hero[]> {
        return this.http.get('/heroes')
            .toPromise()
            .then(res => res.json());
    }

    getNewHero() : Observable<Hero[]> {
        //post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
        return this.http.post('/heroes', {}/* 필수 전달인자 임*/)
            .map(res => res.json());
    }
}