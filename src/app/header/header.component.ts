import { Component, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";

import { AuthorService } from './author.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnDestroy {
    hTitle: string = 'Angular 2 Map Samples';
    user: any;
    private isAlive: boolean = true;

    constructor(private _authorService: AuthorService) { }

    retrieveGitProfile(): void {
        this._authorService.retrieveGitProfile()
            .takeWhile(() => this.isAlive)
            .subscribe(
            data => {
                this.user = data;
            },
            error => {
                console.log("Error ocuured-----", error);
            }
            )
    }

    retrieveLinkednProfile(): void {
        console.log('inside linkedin');
    }


    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.isAlive = false;
    }
}