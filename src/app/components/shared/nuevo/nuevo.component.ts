import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Nuevo } from '../../../interfaces/nuevo.interface';
import { MailsService } from 'src/app/services/mails.service';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

 nuevo:Nuevo={
  'subject' : "",
  'receiver': "",
  'description':""
 }
 

 forma: FormGroup;

  constructor(private mail: MailsService) {
    this.forma = new FormGroup({
      'asunto': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'destinatario': new FormControl('', [Validators.required, Validators.email]),
      'contenido': new FormControl('', Validators.required)
    })
   }

  ngOnInit() {
  }

  CorreoNuevo(){
    this.mail.nuevoCorreo(this.nuevo)
  }

}
