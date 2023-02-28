import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = "http://localhost:3000/jogos";

  constructor(private http: HttpClient) { }

  findAll(): Observable<Game[]>{
    return this.http.get<Game[]>(this.baseUrl);
  }

  findAllPesquisa(filtro: string): Observable<Game[]>{

    let params = new HttpParams();

    if(filtro.trim().length > 2) {
      params = params.set("q", filtro);
    }

    return this.http.get<Game[]>(this.baseUrl, { params });
  }
}
