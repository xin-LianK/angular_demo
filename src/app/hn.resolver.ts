import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';//----------

import { HnService } from './hn.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class HnResolver implements Resolve<any> {
    constructor(private hnService: HnService) { }

    // resolve(route:ActivatedRouteSnapshot) {
    //     return this.hnService.getPost(route.paramMap.get('id'));
    // }
    // 如果在获取数据时发生错误，您可以使用RxJS的catch操作符捕获并处理解析器中的错误
    resolve() {
        return this.hnService.getTopPosts().catch(()=>{
            return Observable.of('data not available at this time ')
        });
    }
    // 你可以返回一个空的observable，在这种情况下用户不会被发送到新的路由：
    // resolve() {
    //     return this.hnService.getTopPosts().catch(() => {
    //         return Observable.empty();
    //     });
    // }
}