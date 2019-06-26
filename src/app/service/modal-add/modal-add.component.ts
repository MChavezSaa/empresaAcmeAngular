import { Component, OnInit } from '@angular/core';
import { ModalAddService } from '../modal-add.service';
import { FormGroup, FormBuilder, Validators, AsyncValidator, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product/product.service';
import { map } from 'rxjs/operators';
import { ProductListComponent } from 'src/app/product/product-list/product-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  formProduct: FormGroup;

  constructor( 
    private modalAddService: ModalAddService,
    private formBuilder:FormBuilder,
    private productService: ProductService,
    private productListComponent: ProductListComponent)
    {
      this.formProduct = this.formBuilder.group({
        name: ["",[Validators.required]],
        code: ["",[Validators.required,Validators.pattern('[a-zA-Z]{3}-[0-9]{4}')], this.codeValidator()],
        date: ["",[Validators.required]],
        price: ["",[Validators.required, Validators.min(0)]],
        description: ["",[Validators.required]],
        rating: ["",[Validators.required]],
        image: [""]
      })
    }


  ngOnInit() {
  }
  ocultarModal(){
    this.modalAddService.ocultarModal();
  }

  saveData(){
    console.log(this.formProduct.value);
     this.productListComponent.guardarProducto(this.formProduct.value);
    this.ocultarModal();
  }

  codeValidator():AsyncValidatorFn{
    return (control:AbstractControl): Observable<{ [key:string]: any} | null> =>{
      let code = control.value;
      console.log("cliente -code:"+code);
      return this.productService.searchProduct(control.value).
          pipe(map(res => {
            if (res && res.length ){
              console.log("codigo encontrado");
              return {'existe':true};
            }
            console.log('codigo no existe');
            return null;
          })
        );
    }
  }
}
