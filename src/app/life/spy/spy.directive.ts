import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from './../logger.service';

let nextId = 1;

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) { }
  ngOnInit() { }
  ngOnDestroy() { }

  private logIt(msg: string) {
    this.logger.log(`Spy #${nextId++}${msg}`);
  }
}
