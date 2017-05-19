
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
/**
 * Created by kitri06 on 2017-05-19.
 */
@Injectable()
export class CarService {
    constructor(private http: Http){}

    getCars() {
        return this.http.get('/heroes')
            .map(res => res.json());
    }
}