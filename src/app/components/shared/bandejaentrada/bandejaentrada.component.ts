import { Component, OnInit } from '@angular/core';
import { MailsService } from 'src/app/services/mails.service';


@Component({
  selector: 'app-bandejaentrada',
  templateUrl: './bandejaentrada.component.html',
  styleUrls: ['./bandejaentrada.component.css']
})
export class BandejaentradaComponent implements OnInit {

  inbox: any[]=[];

  constructor( private mail: MailsService) { 
    
    this.mail.getInbox()
     .subscribe((res: any)=> this.inbox=res);
  }
 
  getBuscador(buscador: string){

  }
  
  ngOnInit() {
  }

}
