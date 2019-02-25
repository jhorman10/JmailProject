import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Nuevo } from '../interfaces/nuevo.interface';

@Injectable({
  providedIn: 'root'
})

export class MailsService {
  
  getQuery(query: string){

    const getUrl =`https://prueba-seleccion-granada.herokuapp.com/${ query }`;
    return this.http.get(getUrl);
  }

  getInbox(){
    return this.getQuery('inbox')
              .pipe( map( data => data['data']));
  }

  getSent(){
    return this.getQuery('sent')
            .pipe( map( data=> data['data']));
  }

  // metodos POST
  
  postUrl: string = 'https://prueba-seleccion-granada.herokuapp.com/send';
  postLoginUrl: string = 'https://prueba-seleccion-granada.herokuapp.com/login';

  constructor(private http: HttpClient) {

  }

  nuevoCorreo(nuevo: Nuevo) {

    let body = JSON.stringify(nuevo);
    let headers = new HttpHeaders({
      'Contentent-Type': 'applicaion/json'
    });

    return this.http.post(this.postUrl, body, { headers: headers });
  }
}
