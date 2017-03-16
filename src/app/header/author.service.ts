import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { APPCONSTANT } from '../config/app.constants';

@Injectable()
export class AuthorService{

    private _author: string = 'sjshank';

    constructor(private _http: Http){}

    retrieveGitProfile(): Observable<any>{
        return this._http.get(`${APPCONSTANT.githubUrl}${this._author}`)
            .map((response: Response) => <any> response.json())
            .catch(this._handleError);
    }

    private _handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().message || 'Server error');
    }
}