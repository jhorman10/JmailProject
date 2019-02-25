import { Component, OnInit } from '@angular/core';
import { MailsService } from 'src/app/services/mails.service';

@Component({
  selector: 'app-eliminados',
  templateUrl: './eliminados.component.html',
  styleUrls: ['./eliminados.component.css']
})
export class EliminadosComponent implements OnInit {

  eliminado: any[]=[];

  constructor(private mail: MailsService) { 
    this.mail.getInbox()
      .subscribe((res: any) => this.eliminado = res);
  }

  ngOnInit() {
  }

}
