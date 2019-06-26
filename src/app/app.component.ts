import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './services/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

title = 'Empresa ACME';

  formLogin: FormGroup;

  constructor(private loginService: LoginService,
     private formBuilder: FormBuilder) { 
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  login(){
    console.log(this.formLogin.value.email);
    console.log(this.formLogin.value.password);

    this.loginService.login(this.formLogin.value.email, this.formLogin.value.password)
      .subscribe((res: any) => {
      console.log(res);
      err => console.log(err);
      });
  }
}
