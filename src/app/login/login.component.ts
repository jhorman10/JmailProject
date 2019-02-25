import { Component, OnInit } from '@angular/core';
import { LogIn } from './../interfaces/login.interface';
import { MailsService } from 'src/app/services/mails.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginNuevo:LogIn={
    'user':"",
    'password':""
  }

  constructor(private mail:MailsService) { }

  ngOnInit() {
  }

  NuevoLogin(){
    this.mail.nuevoLogin(this.LoginNuevo);
  }
  
}
