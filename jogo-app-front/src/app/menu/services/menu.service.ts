import { Injectable } from '@angular/core';
import { AuthTokenService } from '../../auth-services/header-token/token.service';
import { ModalService } from '../../modal/Services/modal.service';
import { Token } from '../../models/Token';
import { HeaderService } from '../../header/services/header.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private AuthTokenService:AuthTokenService,
              private ModalService:ModalService
  ) {

    this.tokenDecoded = this.AuthTokenService.showDecodedJwt();
   
   }

   
    tokenDecoded:any;
    mostraMenu: boolean = false;
    menuLogado:boolean = false;
    menu = true;
    private userSubject = new BehaviorSubject<Token>(null)

    mostrarMenu(mostra:boolean){
      this.userSubject.next(this.tokenDecoded)
      this.mostraMenu = mostra;
    }

    verificaAtivo(){
      if(this.tokenDecoded.Ativo == 'False'){
        console.log('nao esta ativo');
        this.ModalService.modalVerificarConfirmacaoEmail();
      }
    }


    verificaMenuLogado(){
      console.log(this.tokenDecoded)
      console.log(this.tokenDecoded.Ativo, 'ativo');
      this.userSubject.next(this.tokenDecoded)
    
      
       if(this.tokenDecoded.Ativo == 'False'){
        console.log('nao esta ativo');
       return  this.menuLogado = true
      } 
      else if(this.tokenDecoded.Ativo == undefined){
        console.log(this.tokenDecoded.Ativo, 'vendo se esta undefined')
       return  this.menuLogado = false;
      }
      else if (this.tokenDecoded.Ativo == "True"){
        console.log("usuario ativo")
        return this.menuLogado = true
      }

 
    }


  }