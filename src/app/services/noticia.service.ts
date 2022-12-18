import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }
  
  getNoticias(parametros:any): Observable<any>{
    const URL= "https://newsapi.org/v2/top-headlines?country=" + parametros.pais 
    +"&category=" +  parametros.categoria + "&apiKey=d4f9f1e6f96d46748869bd9bce1c768d";
    return this.http.get(URL);
  }
}
