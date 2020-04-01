import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '.app-servers', class styling component
  //template: `<app-server></app-server>
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer:boolean = false;
serverName = 'TestServer';
serverCreation:string = "No server was created";
serverCreated = false;
servers = ['TestServer' , 'TestServer 2'];

  constructor() { 
    setTimeout(()=>{ this.allowNewServer = true;},2000);//this will return the allNewServer object to true after 2s
  }

  ngOnInit() {}
  onCreateServer(){
     this.serverCreated = true;
     this.servers.push(this.serverName);
     this.serverCreation ="server was created"
  }
  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
