import { Injectable } from '@angular/core';
import { Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus=false;

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      this.socketStatus = true;
    })
   
    this.socket.on('connect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    })




  }
}
