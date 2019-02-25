import { Component, OnInit } from '@angular/core';
import { MailsService } from 'src/app/services/mails.service';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.css']
})
export class EnviadosComponent implements OnInit {

  enviados: any[]=[];

  constructor(private mail: MailsService) { 
    this.mail.getSent()
    .subscribe( (res: any)=> this.enviados=res);
  }

  ngOnInit() {
  }

}
