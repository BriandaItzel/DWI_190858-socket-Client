import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'basico';
  constructor(
  public wsService: WebsocketService,
  public ChatService: ChatService
  ) {}

  ngOnInit(): void {
    this.ChatService.sendMessage('Hola desde el Laboratorio1, usando Sockets!')
    
  }
}
