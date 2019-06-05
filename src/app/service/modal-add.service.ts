import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ModalAddService {

  public oculto: string ='';


  constructor() {}

  ocultarModal(){
    this.oculto= "";
    console.log('ocultar modal');
    
  }
  mostrarModal(){
    this.oculto = 'block';
    console.log('mostrar modal');
    
  }
}
