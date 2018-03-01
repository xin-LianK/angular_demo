import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  order: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    // 鉴于以下路由  http://localhost:4200/products?order=popular
    this.route.queryParams.filter(params => params.order).subscribe(params => {
      console.log(params); //{order: "popular"}

      this.order = params.order;
      console.log(this.order); // popular
    })
    // 鉴于一下路由 http://localhost:4200/products?order=popular&filter=new
    // this.route.queryParamMap.subscribe(params => {
    //   this.orderObj = { ...params.keys, ...params };
    // });
    // orderObj = {
    //   "0": "order",
    //   "1": "filter",
    //   "params": {
    //     "order": "popular",
    //     "filter": "new"
    //   }
    // }

  }

  getProducts() {
    // http://localhost:4200/products?order=popular
    this.router.navigate(['/products'], { queryParams: { order: 'popular' } })

    // http://localhost:4200/products?order=popular&price-range=not-cheap
    this.router.navigate(['/products'], { queryParams: { order: 'popular', 'price-range': 'not-cheap' } });
  }

  goUsers() {
    // 将用户路由到用户页面，同时保留查询参数：
    this.router.navigate(['/users'], { queryParamsHandling: 'preserve' });

    // 将新的查询参数传递给用户路由
    // http://localhost:4200/users?order=popular&filter=new
    this.router.navigate(['/users'], { queryParams: { filter: 'new' }, queryParamsHandling: 'merge' });
    // 但现在在Angular 4 + 中弃用了此参数，以支持queryParamsHandling。
  }
}
