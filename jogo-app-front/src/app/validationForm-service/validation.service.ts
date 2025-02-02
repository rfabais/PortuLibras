import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationFormService {

  constructor() { }

   erro = {
    status: false,
    msg: '',
  }


  campoValidate(user: FormGroup) {
    this.erro.msg = '';
   
    
    
    if (user.controls['Nome'].invalid && user.controls['Nome'].touched ) {
      if (user.controls['Nome'].errors['required']) {
        this.erro.msg = "Preencher campo nome";
        console.log(user.controls[''].errors['required'], 'erssjjsj')
        this.erro.status = false;
        return false;
      }
      else if (user.controls['Nome'].errors['minlength']) {
        this.erro.msg = "Campo nome ter mínim@ 3 letra+";
        this.erro.status = false;
        return false;
      }
      else if (user.controls['Nome'].errors['pattern']) {
        this.erro.msg = "Campo nome só letra+";
        this.erro.status = false;
        return false;
      }
      else if (user.controls['Nome'].errors['maxlength']) {
        this.erro.msg = "Campo nome ter máxim@ 20 letra+";
        this.erro.status = false;
        return false;
      }
    }
    if (user.controls['Sobrenome'].invalid && user.controls['Sobrenome'].touched ) {
      if (user.controls['Sobrenome'].errors['required']) {
        this.erro.msg = "Preencher campo sobrenome";
        console.log(user.controls['Sobrenome'].errors['required'], 'erssjjsj')
        this.erro.status = false;
        return false;
      }
      else if (user.controls['Sobrenome'].errors['minlength']) {
        this.erro.msg = "Campo sobrenome ter mínim@ 2 letra+";
        this.erro.status = false;
        return false;
      }
      else if (user.controls['Sobrenome'].errors['pattern']) {
        this.erro.msg = "Campo sobrenome só letra+";
        this.erro.status = false;
        return false;
      }
      else if (user.controls['Sobrenome'].errors['maxlength']) {
        this.erro.msg = "Campo sobrenome ter máxim@ 50 letra+";
        this.erro.status = false;
        return false;
      }
    }
    if (user.controls['Username'].invalid && user.controls['Username'].touched ) {
      if (user.controls['Username'].errors['required']) {
        this.erro.msg = "Preencher campo usuário";
        console.log(user.controls['Username'].errors['required'], 'erssjjsj')
        this.erro.status = false;
        return false;
      }
      else if (user.controls['Username'].errors['minlength']) {
        this.erro.msg = "Campo usuário ter mínim@ 3 caractere+";
        return false;
      }
      else if (user.controls['Username'].errors['pattern']) {
        this.erro.msg = "Campo usuário só letra + número";
        return false;
      }
      else if (user.controls['Username'].errors['maxlength']) {
        this.erro.msg = "Campo usuário ter máxim@ 10 caractere+";
        return false;
      }
    }
    if (user.controls['Email'].invalid && user.controls['Email'].touched ) {
      if (user.controls['Email'].errors['required']) {
        this.erro.msg = "Preencher campo e-mail";
        return false;
      }
      else if (user.controls['Email'].errors['email']) {
        this.erro.msg = "Preencher com e-mail válido";
        return false;
      }
    }
    if (user.controls['Senha'].invalid && user.controls['Senha'].touched ) {
      if (user.controls['Senha'].errors['required']) {
        this.erro.msg = "Preencher campo senha";
        return false;
      }
      else if (user.controls['Senha'].errors['minlength']) {
        this.erro.msg = "Campo senha ter mínim@ 8 caracteres+";
        console.log(user.controls['Senha'].value, 'askjhdjakshdkasjhdkl')
        return false;
      }
      else if (user.controls['Senha'].errors['pattern']) {
        this.erro.msg = "Campo senha só letra + número";
        console.log(user.controls['Senha'].value, 'valor do pattern')
        return false;
      }
      else if (user.controls['Senha'].errors['maxlength']) {
        this.erro.msg = "Campo senha ter máxim@ 12 caracteres+";
        return false;
      }
    }
    if (user.controls['termo'].invalid &&  user.controls['termo'].touched) {
      this.erro.msg = "Aceitar Termos de Uso"
      return false;
    }
   
    else if (user.controls['Senha'].value !== user.controls['reSenha'].value  && user.controls['reSenha'].touched ) {
      this.erro.msg = "Senha combinar-não"
      return false;
    }

  

    else return true;
  }


  validaNome(nome){
      let array: Array<string>  = nome.split('')
      array.forEach(letra =>{

      })
  }

}
