import { poolConnection } from "../../pool.js";

const Connection = await poolConnection()

export class usuario{
    constructor(nick, email, senha, img_perfil, status, data_insert, data_update, id_usuario){
        if(nick == '' || nick == null || nick == undefined){
            this.nick = ''
        }else{
            this.nick = nick
        }

        if(email == '' || email == null || email == undefined){
            this.email = ''
        }else{
            this.email = email
        }

        if(senha == '' || senha == null || senha == undefined){
            this.senha = ''
        }else{
            this.senha = senha
        }

        
        if(img_perfil == '' || img_perfil == null || img_perfil == undefined){
            this.img_perfil = ''
        }else{
            this.img_perfil = img_perfil
        }

       // if(nivelUser == '' || nivelUser == null || nivelUser == undefined){
       //     this.nivelUser = 1
      //  }else{
      //      this.nivelUser = 1
      //  }

        if(status == '' || status == null || status == undefined){
            this.status = 1
        }else{
            this.status = 1
        }

        if(data_insert == '' || data_insert == null || data_insert == undefined){
            this.data_insert = ''
        }else{
            this.data_insert = data_insert
        }

        if(data_update == '' || data_update == null || data_update == undefined){
            this.data_update = ''
        }else{
            this.data_update = data_update
        }