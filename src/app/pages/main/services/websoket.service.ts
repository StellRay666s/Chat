import { inject, Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { RoomStore } from "../store/rooms/room.store";
import { Room } from "../../../model/room.model";
import { MessageStore } from "../store/messages/message.store";
import { Message } from "../../../model/message.model";

@Injectable({
    providedIn:'root'
})
export class WebsocketService {
  url = 'ws://localhost:3001?uuId=4ad3088f-2a0a-4448-b424-d1f880a50848'
  private readonly roomStore = inject(RoomStore)
  private readonly messagesStore = inject(MessageStore)

  socket = io(this.url)



  initConnection(){
    this.socketConect()
    this.socket.on('rooms',(data:Room[])=>{
        this.roomStore.setRooms(data)
    })

    this.socket.on('updateClient',(data:{messagePlate:Omit<Room, 'name'>, message:Message})=>{
      this.messagesStore.setMessage(data.message)
        this.roomStore.updateRoomPlace(data.messagePlate)

    })

    this.socket.on('messageList',(data:Message[])=>{
        this.messagesStore.setMessages(data)
    })
  }



  public socketEmitSomeEvent<T>(event:string, data:T){
    this.socket.emit(event, data)
  }



  private socketConect(){
    this.socket.on('connect',()=>{
        console.log('connect succesfully')
    })
  }

}