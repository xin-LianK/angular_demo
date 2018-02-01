import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    logs: string[] = [];
    preMsg = '';
    preMsgCount = 1;

    log(msg: string) {
        if (msg === this.preMsg) {
            // Repeat message; update last log entry with count.
            this.logs[this.logs.length - 1] = msg + `( ${this.preMsgCount += 1} x )`;
        } else {
            this.preMsg = msg;
            this.preMsgCount = 1;
            this.logs.push(msg);
        }
    }
    clear() { this.logs.length = 0; }

    tick() { this.tick_then(() => { }); }
    tick_then(fn: () => any) { setTimeout(fn, 0); }
}
