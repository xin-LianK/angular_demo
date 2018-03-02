import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

@Injectable()
export class SignupService {

    constructor(private http: Http) { }
    checkEmailNotTaken(email: string) {
        return this.http
            .get('assets/user.json')
            .delay(1000)
            .map(res => res.json())
            .map(users => users.filters(user => user.email === email))
            .map(users => !users.length);
    }
    // 我们如何过滤与提供给方法的电子邮件具有相同电子邮件的用户。然后，我们再次映射结果并进行测试，以确保我们得到一个空对象。
}