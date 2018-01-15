import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { IHotStuffInfo } from 'app/shared/ihot-stuff-info';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const CONTENTFUL_API = 'https://cdn.contentful.com/spaces/x3r1tbrol9cy';
const ACCESS_TOKEN = '?access_token=d2e70c94ca95cab9905d91458f3f2946bf51dbc3d9e170b4a01e44aec514ad81';
const HOT_STUFF_URL = `${CONTENTFUL_API}/entries${ACCESS_TOKEN}&content_type=blogPost`;


@Injectable()
export class HotStuffService {

constructor(private http: HttpClient) { }

  getHotStuffItems(): Observable<any> {
  return this.http
    .get(HOT_STUFF_URL)
    .map((response: any) => {
      return response.items;
    });
}



}
