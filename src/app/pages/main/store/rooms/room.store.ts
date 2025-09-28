import { inject, Injectable, signal } from "@angular/core";
import { Room } from "../../../../model/room.model";
import { WebsocketService } from "../../services/websoket.service";


@Injectable({
    providedIn:'root'
})
export class RoomStore{
 
 
 private selectedRoom = signal<string | null>(null)
 private rooms = signal<Room[]>([])




 setRooms(rooms:Room[]){
    this.rooms.update(val=>[...val, ...rooms])
 }

 updateRoomPlace(data:Omit<Room, 'name'>){
      this.rooms.update(rooms=>rooms.map((room)=>{
         if(room.uuId === data.uuId){
            return {
               ...room, message:data.message
            }
         }else{
               return room
            }
      }))   
 }

 getSelectedRoom(){
   return this.selectedRoom()
 }

 getRooms(){
   return this.rooms
 }

  setSelectedRoom(uuId:string){
    this.selectedRoom.set(uuId)
 }

}
