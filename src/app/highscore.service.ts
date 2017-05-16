import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class HighScoreService {

  url = 'http://rohins.com/api/deilou-score';

  constructor(private _http: Http) { }

  private scoreCreatedSource = new Subject<any>();

  scoreCreated$ = this.scoreCreatedSource.asObservable();
  

  index() {
    return this._http
      .get(this.url)
      .map((response:Response) => response.json());
  }

  create(name, score) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});

    return this._http
      .post(this.url, { name, score }, options)
      .subscribe(()=> this.scoreCreatedSource.next());
  }


}
