import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias: any[]= [];
  title = 'AngularProyectNoticias';
  loading = false;
  constructor(private _noticiaService: NoticiaService){}
  buscarNoticias(parametros:any){
    this.loading=true;
    this.listNoticias=[]
    this._noticiaService.getNoticias(parametros).subscribe(datosDeSuscripcion => {
      this.listNoticias =datosDeSuscripcion.articles;
      this.loading=!true;
    }, error=>{
      console.log(error);
      this.loading=!true;
    });
  }
}
//d4f9f1e6f96d46748869bd9bce1c768d