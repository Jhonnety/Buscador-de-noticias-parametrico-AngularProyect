import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  paisSeleccionado="ar";
  categoriaSeleccionada = "general"
  categorias:any[]=[
    {value:'general', nombre:"General"},
    {value:'business', nombre:"Negocios"},
    {value:'entertainment', nombre:"Entrenamiento"},
    {value:'health', nombre:"Salud"},
    {value:'science', nombre:"Ciencia"},
    {value:'sports', nombre:"Deportes"},
    {value:'technology', nombre:"Tecnologia"}
  ];
  paises:any[]=[
    {value:"ar", nombre:"Argentina"},
    {value:"br", nombre:"Brasil"},
    {value:"fr", nombre:"Francia"},
    {value:"hu", nombre:"Hungria"},
    {value:"mx", nombre:"Mexico"},
    {value:"gb", nombre:"Reino Unidos"}
  ];

  buscarNoticia(){
    const PARAMETROS = {
      categoria:this.categoriaSeleccionada,
      pais:this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);

  }
}
