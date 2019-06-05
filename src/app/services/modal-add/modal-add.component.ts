import { Component, OnInit } from '@angular/core';
import { ModalAddService} from '../modal-add.service';
import { FormGroup,FormBuilder, Validators, AsyncValidatorFn, AbstractControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product/product.service';
import { map} from 'rxjs/operators';


@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  formProduct: FormGroup;

  constructor(private modalAddService: ModalAddService, 
    private formBuilder: FormBuilder, private productService: ProductService) {
    this.formProduct = this.formBuilder.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required,Validators.min(8), Validators.pattern('^[a-zA-Z]{3,3}-[0-9]{4,4}$')], this.codeValidator()],
      date: ['', [Validators.required]],
      price: ['', [Validators.required,Validators.min(0)]],
      description: ['', [Validators.required]],
      rating: ['', [Validators.required], this.ratingValidator()],
    });
  }

  ngOnInit() {
  }

  ocultarModal(){
    this.modalAddService.ocultarModal();
  }

  saveData(){
    console.log(this.formProduct.value);
  }

  codeValidator(): AsyncValidatorFn{
    return (control:AbstractControl):Observable<{ [key:string]: any}| null> =>{
      let code = control.value;
      console.log("cliente - code:" + code);
      return this.productService.searchProduct(control.value)
      .pipe(map(res => {
        if(res && res.length){
          console.log('codigo encontrado');
          return {'existe': true}; // el codigo ya registrado
        }
        console.log('codigo no existe'); // el codigo no existe
        return null;
      })
      );
    }; 
  }

  ratingValidator(){}
}
