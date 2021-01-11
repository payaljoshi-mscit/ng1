import { Component, OnInit } from '@angular/core';
import  * as io from 'socket.io-client';
import * as moment from 'moment';
import {environment} from '../../environments/environment'; 
//import chat url from env

//npm i socket.io-client@2.3.0 --save
//npm i @types/socket.io-client --save
//npm i moment --save

@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.css']
})
export class ChatformComponent implements OnInit {
   
  message: string;
  messages: string[] = [];
  private socket : SocketIOClient.Socket; 
  private url = 'http://localhost:3000';

  constructor() {
    this.socket = io(environment.chaturl);
    }

  sendMessage() :void{
    const currentTime = moment().format('hh:mm:ss a');
    const messageWithTimestamp = `YOU :${currentTime}: ${this.message}`;
    this.messages.push(messageWithTimestamp);

    //this.chatService.sendMessage(this.message);
    this.socket.emit('client-message', this.message);

    this.message = '';
  }

  ngOnInit() {
    this.socket.on('server-message', (message) => {
      const currentTime = moment().format('hh:mm:ss a');
      const messageWithTimestamp = `SERVER : ${currentTime}: ${message}`;
      this.messages.push(messageWithTimestamp);
   
    });
    
    
  }

}
