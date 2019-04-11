import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListService {

  passwd: any;
  url = 'https://pd.tymy.cz/api/events?login=simon&password=605323511';
  data: any;
  constructor(private http: HttpClient) { }

  getEvents(): any {
    // const endTime = new Date().getFullYear() + '' + new Date().getMonth() + '' + new Date().getDate();
    const datePipe = new DatePipe('en-UK');
    const endTime = datePipe.transform(Date.now(), 'yyyyMMdd');
    console.log(endTime); /*Md5.hashStr("sem dat moje heslo")*/
    this.url = 'https://pd.tymy.cz/api/events?login=simon&password=' + 'e0fcb7fc608c79e69fdc99ff7050aa72&filter=endTime>' + endTime +  '&order=startTime&limit=10';
    // this.url = '../../assets/eventData.json'; //dummy data
    console.log('log url >> ' + this.url); // endTime<' + endTime + '
    // console.log();

    return this.http.get(this.url);
  }

}
