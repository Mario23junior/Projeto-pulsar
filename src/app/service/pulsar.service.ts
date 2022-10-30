import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Pulsar } from '../model/Pulsar';

@Injectable({
  providedIn: 'root'
})
export class PulsarService {

  public baseUrl = "http://localhost:8080"
  public uri = "/v1/project/pulsar/"

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient
  }


  listAll() {
    return this.httpClient.get<Pulsar[]>(this.baseUrl + this.uri)
      .pipe(
        first(),
        delay(1000),
        tap(pulsarDatas => console.log(pulsarDatas))
      );

  }
}
