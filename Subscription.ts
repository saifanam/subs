import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'subs-component',
    templateUrl: 'subs.component.html',
})
export class SubscriptionComponent {
    private subs: Subscription[] = [];

    constructor() {
        //
    }

    ngOnInit(): void {
        this.subs.push(
            // subscription 1
        );

        this.subs.push(
            // subscription 2
        );

        // ... and so on

    }

    ngOnDestroy(): void {
        this.subs.forEach((e) => e.unsubscribe());
    }
}
